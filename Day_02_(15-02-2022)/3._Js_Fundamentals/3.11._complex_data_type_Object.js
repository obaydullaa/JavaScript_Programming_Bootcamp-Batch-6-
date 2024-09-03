// Complex Data Type


const demoProfile = {
    firstName: 'Obaydul',
    age: 24,
    Profession: 'Web Developer',
    'previous prof': 'Engineer'
}

console.log(demoProfile.firstName); // Obaydul

console.log(demoProfile['previous prof']); // Engineer
demoProfile.featureProf = 'AI';
console.log(demoProfile)