const {createOrder}= require('./cart');
const {getOrderStatus}= require('./cartorder');

describe('Create Order feature', () => {
    const items = [{name: "Item 1", price: 10, quantity: 2}];
    test("Valid order Order is successfully created", () => {
        const result = createOrder(items);
        expect(result.success).toBeTruthy();
    })
    test("Empty cart should return success: false and order: null", () => {
        const emptyItems = [];
        const result = createOrder(emptyItems);
        expect(result.success).toBeFalsy();
        expect(result.order).toBeNull();
    })
    test("Order with coupon should apply discount", () => {
        const coupon = "SAVE10";
        const result = createOrder(items, coupon);
        expect(result.success).toBeTruthy();
        expect(result.order.total).toBe(18); // 10*2=20, 20*0.9=18
    })
    test
})