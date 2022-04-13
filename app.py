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
# Return template and data
    return render_template("plot.html", state=state, statedb=statedb) 


if __name__ == "__main__":
    app.run(debug=True)