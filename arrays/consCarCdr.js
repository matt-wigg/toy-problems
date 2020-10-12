const cons = (a, b) => [a, b];

const car = (pair) => pair[0];

const cdr = (pair) => pair[1];

car(cons(3, 4)); // returns 3
cdr(cons(3, 4)); // returns 4
