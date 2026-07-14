import math

from flask import Flask, request, jsonify

app = Flask(__name__)

def box(n):
    if n >= 0:
        return int(n)
    else:
        if int(n) == n:
            return n
        else:
            return int(n)-1
            
    
def fact(n):
    return math.factorial(n)
    
def square_root(n):
    return n**(1/2)
    
def power(a,b):
    return a**b
    
def cube(n):
    return n**3

class Trigonometry:
    def __init__(self):
        pass
    
    @staticmethod
    def sin(theta):
        return math.sin(theta)
        
    @staticmethod
    def cos(theta):
        return math.cos(theta)
        
    @staticmethod
    def tan(theta):
        return math.tan(theta)
    
    @staticmethod
    def cosec(theta):
        return 1/math.sin(theta)
    
    @staticmethod
    def sec(theta):
        return 1/math.cos(theta)
    
    @staticmethod
    def cot(theta):
        return 1/math.tan(theta)
        

def square(n):
  return n**2

@app.route('/calculate', methods=['GET'])
def calculate():
    # Grab the value of 'n' that your JavaScript sent over
    n_param = request.args.get('n', '')
    
    if not n_param:
        response = jsonify({"error": "No value provided"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 400
        
    try:
        #Convert the input string to a number and call your square()
        n_value = float(n_param)
        result_value = square(n_value)
        
        #Format the response as JSON
        response = jsonify({"result": result_value})
        
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    except ValueError:
        response = jsonify({"error": "Invalid number format"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 400

#Start the Backend Server
if __name__ == '__main__':
    
    app.run(port=5000, debug=True)