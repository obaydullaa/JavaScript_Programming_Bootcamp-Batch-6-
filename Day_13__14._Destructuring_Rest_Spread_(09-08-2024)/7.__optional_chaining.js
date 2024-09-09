/**
 * 7.optional chaining
 * 
 */

const obj = {
    name: 'obaydul',
    address: {
        city: {
            road: '.....'
        }
    }
}

// old js
// let result = obj.address && obj.address.city && obj.address.road

// modern js => optional chaining
let result = obj.address?.city?.road


console.log(result)

// if(result) {
//     // code
// }
