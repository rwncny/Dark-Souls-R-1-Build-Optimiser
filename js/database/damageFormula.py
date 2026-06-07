### writing this in python for simplicity and readability, but may translate to javascript later
import math

def totalOutput(ar, df):
    x = ar/df
    if x<1:
        total = ar * ((0.4*x**3) - (0.9*x**2) + (0.59*x) + 0.1)
    else:
        total = ar - (df * 0.79 * (math.e**(-0.22/x)))
    
    return total

print (totalOutput(101.0,83.0))