//describe()-test plan 
// it/test()-test case
// expect()-assertion
// expect().toEqual()-matcher
// expect().toBeTruthy()-matcher
// expect().toBeFalsy()-matcher
// expect().toBeDefined()-matcher



const { describe } = require("node:test");
const {add} = require("./calculator");
const {subtract} = require("./calculator");
const {div} = require("./calculator");
const {mul} = require("./calculator");
describe("ADD feature of calculator", () => {
    test("Add 2 positive numbers", () => {
        expect(add(5, 10)).toBe(15);
    });
    test("Add 2 negative numbers", () => {
        expect(add(-5, -10)).toBe(-15);
    }); 

})


/*
describe("SUBTRACT feature of calculator", () => {
    test("Subtract 2 positive numbers", () => {
        expect(subtract(10, 5)).toBe(5);
    })
    test("Subtract 2 negative numbers", () => {
        expect(subtract(-10, -5)).toBe(-5);
    });

})

describe("DIVIDE feature of calculator", () => {
    test("Divide 2 positive numbers", () => {
        expect(div(10, 5)).toBe(2);
    })  
    test("Divide 2 negative numbers", () => {
        expect(div(-10, -5)).toBe(2);
    }); 
})

describe("MULTIPLY feature of calculator", () => {
    test("Multiply 2 positive numbers", () => {
        expect(mul(10, 5)).toBe(50);
    })  
    test("Multiply 2 negative numbers", () => {
        expect(mul(-10, -5)).toBe(0);
    }); 

})
*/