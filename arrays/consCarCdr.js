/*
This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of
that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:
def cons(a, b):
    return lambda f : f(a, b)
Implement car and cdr.

https://dailycodingproblem.com/
*/
const cons = (a, b) => [a, b];

const car = (pair) => pair[0];

const cdr = (pair) => pair[1];

car(cons(3, 4)); // returns 3
cdr(cons(3, 4)); // returns 4
