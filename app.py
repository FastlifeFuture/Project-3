from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/happinessDB")

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

# Return template and data
    return render_template("index.html") 

# Route to render plot.html template using data from Mongo
@app.route("/dashboard/<state>")
def plot_state(state):
    statedb = mongo.db.state_happiness.find_one({'StateName':state})
    total =0
    for score in statedb.happy_score:
        total += score
    avg_score = total/(len(statedb.happy_score))
    if avg_score >=8.5:
        img_num = "9-10"
    elif avg_score>=7:
        img_num = '7-8'
    elif avg_score >=5:
        img_num = '5-6'
    else:
        img_num = '3-4'
# Return template and data
    return render_template("plot.html", state=state, statedb=statedb, img_num=img_num) 


if __name__ == "__main__":
    app.run(debug=True)