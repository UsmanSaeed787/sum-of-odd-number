"use strict";
// write a program that calculate the sum of odd numbers between 1-100
let sum = 2;
let list = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum = sum + 1;
        list.push(i);
    }
}
console.log("sum", sum, list);
