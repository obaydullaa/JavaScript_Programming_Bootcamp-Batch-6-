/**
 * 8.2_arguments
 */

function product(name, price, discount, shipping) {
    // return console.log(arguments);
    let info = '';
    for (const property of arguments) {
        console.log(property);
        info += property + ' ';
    }
    return info;
    // return `${name}-$${price}`
}
const shirt = product('printed T-shirt ', 50, 0, true);

console.log(shirt);