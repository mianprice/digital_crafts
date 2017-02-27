from turtle import *

def triangle():
    for i in range(1,4):
        forward(100)
        setheading(i*120)

def square():
    for i in range(1,5):
        forward(100)
        setheading(i*90)

def pentagon():
    for i in range(1,6):
        forward(100)
        setheading(i*72)

def hexagon():
    for i in range(1,7):
        forward(100)
        setheading(i*60)

def octagon():
    for i in range(1,9):
        forward(100)
        setheading(i*45)

def star():
    for i in range(1,6):
        forward(100)
        setheading(i*144)

def long_circle():
    for i in range(1,361):
        forward(1)
        setheading(i)


if __name__ == '__main__':
    triangle()
    square()
    pentagon()
    hexagon()
    octagon()
    star()
    long_circle()
    mainloop()
