'''
Functions:
getCountryForIP(line): Extracts country name for an IP address using regular expressions and IPy.
duration(seconds, _maxweeks=99999999999):

Formats seconds into a human-readable duration.
dateParser(line):

Parses a date from a line using dateutil.parser.
getHeaderVal(h, data, rex='\s(.?)\n\S+:\s'):**

Extracts header values from mail data using regular expressions.
index():

Main route for parsing email headers, generating reports, and returning a JSON response.
Variables:
app, reader, cors:

Flask app, GeoIP2 database reader, and CORS configuration.
Utility Functions:

duration:
Formats seconds into a human-readable duration.
Execution:
Uses command-line arguments for configuration (debug mode, host, and port).
Routes:
'/report':
Main route for parsing email headers, generating reports, and returning a JSON response.
'''
from flask import Flask, jsonify
from flask import render_template
from flask import request

from email.parser import HeaderParser
import time
import dateutil.parser

from datetime import datetime
import re

import pygal
from pygal.style import Style

from IPy import IP
import geoip2.database

import argparse

from flask_cors import CORS, cross_origin

app = Flask(__name__)
reader = geoip2.database.Reader(
    '%s/data/GeoLite2-Country.mmdb' % app.static_folder)

app.config['CORS_HEADERS'] = 'text/plain'
app.app_context().push()

cors = CORS(resources={
    r'/*': {
        'origins': [
            'http://localhost:3000'
        ]
    }
})

cors.init_app(app)

# Function to get the country name for an IP address using regular expressions and IPy library
def getCountryForIP(line):
    ipv4_address = re.compile(r"""
        \b((?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.
        (?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.
        (?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.
        (?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d))\b""", re.X)
    ip = ipv4_address.findall(line)
    if ip:
        ip = ip[0]  # take the 1st ip and ignore the rest
        if IP(ip).iptype() == 'PUBLIC':
            # Retrieve country information for the IP address using GeoIP2 database
            r = reader.country(ip).country
            if r.iso_code and r.name:
                return r.name

# Context processor for utility functions
@app.context_processor
def utility_processor():
    # Function to format seconds into a human-readable duration
    def duration(seconds, _maxweeks=99999999999):
        return ', '.join(
            '%d %s' % (num, unit)
            for num, unit in zip([
                (seconds // d) % m
                for d, m in (
                    (604800, _maxweeks),
                    (86400, 7), (3600, 24),
                    (60, 60), (1, 60))
            ], ['wk', 'd', 'hr', 'min', 'sec'])
            if num
        )
    return dict(duration=duration)

# Function to parse a date from a given line using dateutil.parser
def dateParser(line):
    try:
        r = dateutil.parser.parse(line, fuzzy=True)
    except ValueError:
        # Fallback mechanism for cases where fuzzy parser fails due to incorrect timezone information
        r = re.findall('^(.*?)\s*(?:\(|utc)', line, re.I)
        if r:
            r = dateutil.parser.parse(r[0])
    return r

# Function to extract header value from mail data using regular expressions
def getHeaderVal(h, data, rex='\s*(.*?)\n\S+:\s'):
    r = re.findall('%s:%s' % (h, rex), data, re.X | re.DOTALL | re.I)
    if r:
        return r[0].strip()
    else:
        return None

# Generating Reports after Parsing
@app.route('/report', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # mail_data = request.form['headers'].strip()
        mail_data = request.get_data(as_text=True).strip()
        # print('Type of mail_data is {0}'.format(type(mail_data)))
        # print(mail_data)
        r = {}
        n = HeaderParser().parsestr(mail_data)
        graph = []
        received = n.get_all('Received')
        if received:
            received = [i for i in received if ('from' in i or 'by' in i)]
        else:
            received = re.findall(
                'Received:\s*(.*?)\n\S+:\s+', mail_data, re.X | re.DOTALL | re.I)
        c = len(received)
        for i in range(len(received)):
            if ';' in received[i]:
                line = received[i].split(';')
            else:
                line = received[i].split('\r\n')
            line = list(map(str.strip, line))
            line = [x.replace('\r\n', ' ') for x in line]
            try:
                if ';' in received[i + 1]:
                    next_line = received[i + 1].split(';')
                else:
                    next_line = received[i + 1].split('\r\n')
                next_line = list(map(str.strip, next_line))
                next_line = [x.replace('\r\n', '') for x in next_line]
            except IndexError:
                next_line = None

            org_time = dateParser(line[-1])
            if not next_line:
                next_time = org_time
            else:
                next_time = dateParser(next_line[-1])

            if line[0].startswith('from'):
                data = re.findall(
                    """
                    from\s+
                    (.*?)\s+
                    by(.*?)
                    (?:
                        (?:with|via)
                        (.*?)
                        (?:\sid\s|$)
                        |\sid\s|$
                    )""", line[0], re.DOTALL | re.X)
            else:
                data = re.findall(
                    """
                    ()by
                    (.*?)
                    (?:
                        (?:with|via)
                        (.*?)
                        (?:\sid\s|$)
                        |\sid\s
                    )""", line[0], re.DOTALL | re.X)

            delay = (org_time - next_time).seconds
            if delay < 0:
                delay = 0

            try:
                ftime = org_time.utctimetuple()
                ftime = time.strftime('%m/%d/%Y %I:%M:%S %p', ftime)
                r[c] = {
                    'Timestmp': org_time,
                    'Time': ftime,
                    'Delay': delay,
                    'Direction': [x.replace('\n', ' ') for x in list(map(str.strip, data[0]))]
                }
                c -= 1
            except IndexError:
                pass

        for i in list(r.values()):
            if i['Direction'][0]:
                graph.append(["From: %s" % i['Direction'][0], i['Delay']])
            else:
                graph.append(["By: %s" % i['Direction'][1], i['Delay']])

        totalDelay = sum([x['Delay'] for x in list(r.values())])
        fTotalDelay = utility_processor()['duration'](totalDelay)
        delayed = True if totalDelay else False

        custom_style = Style(
            background='transparent',
            plot_background='transparent',
            font_family='googlefont:Open Sans',
            # title_font_size=12,
        )
        line_chart = pygal.HorizontalBar(
            style=custom_style, height=250, legend_at_bottom=True,
            tooltip_border_radius=10)
        line_chart.tooltip_fancy_mode = False
        line_chart.title = 'Total Delay is: %s' % fTotalDelay
        line_chart.x_title = 'Delay in seconds.'
        for i in graph:
            line_chart.add(i[0], i[1])
        chart = line_chart.render(is_unicode=True)
        
        list1 = []
        for key, value in r.items():
            if len(value['Direction']) >= 2:
                first_item = value['Direction'][0]
                
                if first_item != '':
                    print('first_item')
                    print(first_item)
                    country_name = getCountryForIP(first_item)
                    value['country_name'] = country_name
                else:
                    value['country_name'] = ''

        print("r")
        print(r)

        summary = {
            'From': n.get('From') or getHeaderVal('from', mail_data),
            'To': n.get('to') or getHeaderVal('to', mail_data),
            'Cc': n.get('cc') or getHeaderVal('cc', mail_data),
            'Subject': n.get('Subject') or getHeaderVal('Subject', mail_data),
            'MessageID': n.get('Message-ID') or getHeaderVal('Message-ID', mail_data),
            'Date': n.get('Date') or getHeaderVal('Date', mail_data),
        }

        security_headers = ['Received-SPF', 'Authentication-Results',
                            'DKIM-Signature', 'ARC-Authentication-Results']
        security_headers_dict = {header: n.get(header) or getHeaderVal(header, mail_data) for header in security_headers}
        x_headers = {key: value for key,value in n.items() if key.startswith('X-')}
        other_headers = {k: v for k,v in n.items() if k not in ['Received','Subject','From','To','Message-ID','CC','Date'] and k not in security_headers and not k.startswith('X-')}
    
        return jsonify({"data": r, "summary": summary, "security_headers_dict":security_headers_dict, "x_headers": x_headers, "other_headers": other_headers, "graph": graph, "total_delay": fTotalDelay})
    else:
        return render_template('index.html')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Mail Header Analyser")
    parser.add_argument("-d", "--debug", action="store_true", default=False,
                        help="Enable debug mode")
    parser.add_argument("-b", "--bind", default="127.0.0.1", type=str)
    parser.add_argument("-p", "--port", default="8000", type=int)
    args = parser.parse_args()

    app.debug = args.debug
    app.run(host=args.bind, port=args.port)