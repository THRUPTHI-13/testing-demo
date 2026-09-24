const {signup} = require('./auth');
const {login} = require('./auth');  

describe('Signup feature', () => {
    test('should create a new user successfully', () => {
        // to make this false we need to have this signup details so it will not be the creation of new users 
        //signup('John Doe', 'john@example.com', 'password123');
        const result = signup('John Doe', 'john@example.com', 'password123');
        expect(result.success).toBeTruthy();
    })
    /*test('should not create a user with an existing email', () => {
        signup('Jane Doe', 'john@example.com', 'password123');
        const result = signup('Jane Doe', 'john@example.com', 'password123');
        expect(result.success).toBeFalsy();
    });*/
}); 

/*
describe('Login feature', () => {
    test('should login successfully with correct credentials', () => {
        signup('Jane Doe', 'jane@example.com', 'password123');
        const result = login('jane@example.com', 'password123');
        expect(result.success).toBeTruthy();
    });
    test('should not login with incorrect password', () => {
        signup('Jane Doe', 'jane@example.com', 'password123');
        const result = login('jane@example.com', 'password1234');
        expect(result.success).toBeFalsy();
    });
}); 
*/    
