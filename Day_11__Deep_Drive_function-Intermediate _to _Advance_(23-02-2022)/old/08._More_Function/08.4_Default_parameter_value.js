/**
 * 8.4_Default parameter value
 */


function product(name, price, discount = 0.1, shipping, category = 'T-shirt') {
    // discount = discount || 0.1; // before Es6 Default parameter
    console.log(name, price, discount, shipping, category);
}
const shirt = product('printed T-shirt ', 50, undefined, true, );

console.log(shirt);