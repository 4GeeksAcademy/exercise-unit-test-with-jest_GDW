// € > $ //

    // 1
    test('1€ should be 1.2$', () => {
        //imports func from app.js within test functino 
        const {fromEuroToDollar} = require('./app.js');
        // console.log('€ > $', 1 * 1.2)       // expectation
        expect(fromEuroToDollar(1)).toBe(1.2); // test func
    })
    // Random number
    test('43€ should be 51.6$', () => {
        const {fromEuroToDollar} = require('./app.js');
        // console.log('€ > $', 43 * 1.2)      
        expect(fromEuroToDollar(43)).toBe(51.6); 
    })
    // Big random number
    test('100053 should be 120063.6', () => {
        const {fromEuroToDollar} = require('./app.js');
        // console.log('€ > $', 100053 * 1.2)      
        expect(fromEuroToDollar(100053)).toBe(120063.6);
    })
    // String
    test('abc should return an error message', () => {
        const {fromEuroToDollar} = require('./app.js');
        // console.log('€ > $', 100053 * 1.2)      
        expect(fromEuroToDollar('abc')).toBe('Please give a numeric value');
    })
    // Boolean
    test('boolean should return an error message', () => {
        const {fromEuroToDollar} = require('./app.js');
        // console.log('€ > $', 100053 * 1.2)      
        expect(fromEuroToDollar('true')).toBe('Please give a numeric value');
    })


// $ > ¥ //

    // 1
    test('1$ should be 106.58¥', () => {
        const {fromDollarToYen} = require('./app.js');
        // console.log('$ > ¥', (1 / 1.2) * 127.9)  
        expect(fromDollarToYen(1)).toBe(106.58)
    })
    // Random number
    test('88€ should be 9379.33¥', () => {
        const {fromDollarToYen} = require('./app.js');
        // console.log('€ > $', 43 * 1.2)      
        expect(fromDollarToYen(88)).toBe(9379.33); 
    })
    // Big random number
    test('120005903$ should be 12790629161.42¥', () => {
        const {fromDollarToYen} = require('./app.js');
        // console.log('€ > $', 100053 * 1.2)      
        expect(fromDollarToYen(120005903)).toBe(12790629161.42);
    })
    // String
    test('abc should return an error message', () => {
        const {fromDollarToYen} = require('./app.js');
        // console.log('€ > $', 100053 * 1.2)      
        expect(fromDollarToYen('abc')).toBe('Please give a numeric value');
    })
    // Boolean
    test('boolean should return an error message', () => {
        const {fromDollarToYen} = require('./app.js');
        // console.log('€ > $', 100053 * 1.2)      
        expect(fromDollarToYen('true')).toBe('Please give a numeric value');
    })

// ¥ > £ //

    // 1000
    test('1000¥ should be 6.25£', () => {
        const {fromYenToPound} = require('./app.js');
        // console.log("¥ > £", (1000 / 127.9) * 0.8)  
        expect(fromYenToPound(1000)).toBe(6.25)
    })

    // Random number
    test('3700€ should be 23.14£', () => {
        const {fromYenToPound} = require('./app.js');
        // console.log('€ > $', 43 * 1.2)      
        expect(fromYenToPound(3700)).toBe(23.14); 
    })
    // Big random number
    test('980234234¥ should be 6131254.00£', () => {
        const {fromYenToPound} = require('./app.js');
        // console.log('€ > $', 100053 * 1.2)      
        expect(fromYenToPound(980234234)).toBe(6131254.00);
    })
    // String
    test('abc should return an error message', () => {
        const {fromYenToPound} = require('./app.js');
        // console.log('€ > $', 100053 * 1.2)      
        expect(fromYenToPound('abc')).toBe('Please give a numeric value');
    })
    // Boolean
    test('boolean should return an error message', () => {
        const {fromYenToPound} = require('./app.js');
        // console.log('€ > $', 100053 * 1.2)      
        expect(fromYenToPound('true')).toBe('Please give a numeric value');
    })

// ----------------------------------------
// SUM
// imports function from app.js outside test function
// const {sum} = require('./app.js');

// // test + description
// test('adds 14 + 9 to equal 23', () => {
//     let total = sum(14, 9); // function call
//     expect(total).toBe(23); // expected output
// });