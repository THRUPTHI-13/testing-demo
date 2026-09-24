const {createCart} = require('./cart');

describe('Create Cart feature', () => {
    test("Valid order Order is successfully created", () => {
        const items = [{name: "Item 1", price: 10, quantity: 2}];
        const result = createCart(items);
        expect(result.success).toBeTruthy();
    })
    test("Empty cart Order fails and appropriate values are returned", () => {
        const items = [];
        const result = createCart(items);
        expect(result.success).toBeFalsy();
    })

    test("Multiple products	Correct number of items exists",() => {)
})