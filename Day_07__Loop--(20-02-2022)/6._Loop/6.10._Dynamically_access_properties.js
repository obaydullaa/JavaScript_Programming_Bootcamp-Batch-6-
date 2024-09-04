/**
 * 6.10.Dynamically access properties
 */
// Object Looping
// For in loop

const myProfile = {
    firstName: 'Obaydul',
    lastName: 'Islam',
    age: 24,
    city: 'Rajshahi',
}
const surName = 'firstName';
console.log(myProfile.firstName);
console.log(myProfile['firstName']);

console.log(myProfile[surName]); // Dynamically acces value 
// Note: Thats mean i don't search surName, I search value of surName

for (let key in myProfile) {
    console.log(myProfile[key]);
}