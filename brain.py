import math

def box(n):
    if n >= 0:
        return int(n)
    else:
        if int(n) == n:
            return n
        else:
            return int(n)-1
            
def sin(theta):
    return math.sin(theta)
   
def cos(theta):
    return math.cos(theta)
    
def fact(n):
    return math.factorial(n)
    
def square_root(n):
    return n**(1/2)
    
def power(a,b):
    return a**b
    
def cube(n):
    return n**3
def sq(n):
    return n**2

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

def comb(n,r):
    return int(fact(n)/(fact(r)*fact(n-r)))

print(comb(4,2))