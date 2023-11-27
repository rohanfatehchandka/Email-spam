import nltk
from newspaper import Article 
import openai
import nltk
import re
nltk.download('punkt')

def get_summary(url):
    article=Article(url)
    article.download()
    article.parse()
    article.nlp()
    article_summary=article.summary 
    return article_summary 

def gpt3(text):
    # openai.api_key='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'
    openai.api_key='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'
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt=text,
    temperature=0.3,
    max_tokens=2000,
    top_p=1.0,
    frequency_penalty=0.0,
    presence_penalty=1
    )
    content=response.choices[0].text
    print(content)
    return response.choices[0].text

def fact_check(text_peice):
    topic=text_peice
    query1=f"Based on the email header provided {topic} detect what email fraud it is .in a single word tell if it is spam or not and give the category of spam . Give the ip address of the sender and the location of that ip"
    # query2="in a single word tell if it is spam or not and give the category of spam . Give the ip address of the sender and the location of that ip"
    response1 = gpt3(query1)
    # response2 = gpt3(query2)
    print(response1)
    # print(response2)
    return response1