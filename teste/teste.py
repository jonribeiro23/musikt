import pymongo
from pymongo import MongoClient

cluster = MongoClient('mongodb+srv://musik:musik23@cluster0-6dqjc.mongodb.net/test?retryWrites=true&w=majority')
db = cluster['musik']
colection = db['interessados']
colection.insert_one({'teste':'testando'})
