# coding:utf-8
import json
from flask_cors import CORS
from flask_cors import cross_origin
    

from flask import Flask, request

app = Flask(__name__)

BASE_URL = '/api'

def toJson(obj:object):        
    return json.dumps(obj,ensure_ascii=False, default=lambda o: o.__dict__, sort_keys=True, indent=2)

@app.route(BASE_URL + '/create/student', methods=['GET'])
@cross_origin()
def create_student():    
    param = request.args.to_dict()    
    student = {}
    student["name"] = param["name"]
    student["age"]  = param["age"]
    student["sex"]  = param["sex"]    
    return toJson(student)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
    
