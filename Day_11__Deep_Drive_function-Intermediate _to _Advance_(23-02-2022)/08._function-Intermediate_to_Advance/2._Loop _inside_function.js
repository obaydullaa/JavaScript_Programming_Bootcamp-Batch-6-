/**
 * 2.Loop inside function
 */
// ... Rest Operator
function product(name, ...property) {
    console.log(name);
    console.log(property);
    return `
        ${name} ${property[0]}
    `
}
const shirt = product('printed T-shirt ', 50, 0, true, 'T-shirt Category');

console.log(shirt);