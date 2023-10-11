// 1€ = ...
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// € > $
const fromEuroToDollar = (valueinEuro) => {
    if(isNaN(valueinEuro)) {
        return 'Please give a numeric value'
    }
    return Number((valueinEuro * oneEuroIs.USD).toFixed(2));
}
// $ > ¥
const fromDollarToYen = (valueinDollar) => {
    if(isNaN(valueinDollar)) {
        return 'Please give a numeric value'
    }
    return Number(((valueinDollar / oneEuroIs.USD) * oneEuroIs.JPY).toFixed(2));
}
// ¥ > £
const fromYenToPound = (valueinYen) => {
    if(isNaN(valueinYen)) {
        return 'Please give a numeric value'
    }
    return Number(((valueinYen / oneEuroIs.JPY) * oneEuroIs.GBP).toFixed(2));
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};

// SUM
// const sum = (a,b) => {
//     return a + b
// }
// console.log(sum(7,3));