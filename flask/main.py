from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_restful import Api
from helpers import fact_check  # Import the fact_check function from the helpers module
import nltk

import json

import pickle
import numpy as np
import pandas as pd
from flask import Flask, render_template, request
import json
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

app = Flask(__name__)
CORS(app)  # Initialize CORS for the entire app
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

nltk.download('punkt')  # Download the required nltk data

# Load the URL spam classification dataset
url = pd.read_csv('./data-set/url_spam_classification.csv')

# Preprocess the data
url['is_spam'] = url.is_spam.apply(str)
url['is_spam'] = url['is_spam'].apply(lambda x: 1 if x == "True" else 0)

# Split data into features and labels
urls = url.iloc[:, 0]
ifSpam = url.iloc[:, 1]

# Tokenization function for URL extraction
def extractUrl(data):
    url = str(data)
    extractSlash = url.split('/')
    result = []
    for i in extractSlash:
        extractDash = str(i).split('-')
        dotExtract = []
        for j in range(0, len(extractDash)):
            extractDot = str(extractDash[j]).split('.')
            dotExtract += extractDot
        result += extractDash + dotExtract
    result = list(set(result))
    return result

# Split data into training and testing sets
urls_train, urls_test, ifSpam_train, ifSpam_test = train_test_split(urls, ifSpam, test_size=0.25)

# Create and train CountVectorizer
cv = CountVectorizer(tokenizer=extractUrl)
features = cv.fit_transform(urls_train)
features_test = cv.transform(urls_test)

# Train Multinomial Naive Bayes model
nbModel = MultinomialNB()
nbModel.fit(features, ifSpam_train)

# Save Multinomial Naive Bayes model using pickle
with open('nbModel.pkl', 'wb') as file:
    pickle.dump(nbModel, file)

# Load Multinomial Naive Bayes model
with open('nbModel.pkl', 'rb') as file:
    loaded_nbModel = pickle.load(file)

# Route for predicting spam or not spam based on the input URL
@app.route('/predict', methods=['POST'])
@cross_origin()  # Enable CORS for this route
def predict():
    if request.method == 'POST':
        data = request.get_json()
        resultret = []
        var = data["items"]
        for x in var:
            # Use the trained model to predict whether the URL is spam or not
            input_features = cv.transform([x])
            prediction = loaded_nbModel.predict(input_features)
            # Print the result
            result = "Spam" if prediction == 1 else "Not Spam"
            resultret.append(result)
            print("printing result")
            print(result)
        return resultret

# Route for authenticating a user query using the fact_check function
@app.route('/factcheck', methods=['POST'])
@cross_origin()  # Enable CORS for this route
def verifier():
    print("Inside the verifier at the backend")
    data = request.get_data(as_text=True)
    print("The request body is", data)
    result = fact_check(data)
    return jsonify({"result": result})

# Run the Flask app if this script is executed
if __name__ == "__main__":
    app.run(debug=True)