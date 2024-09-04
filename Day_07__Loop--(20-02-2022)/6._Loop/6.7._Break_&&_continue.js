/**
 * 6.7.Break && continue
 */

const profile = ['Obaydul', 'Islam', 25, 'Weg Programmer'];

let i = 0;
while (i < profile.length) {
    if (profile[i] === 25) {
        // console.log('I don\'t show my age');
        i++;
        // continue;
        break;
    } else {
        console.log(profile[i]);
    }
    i++;
}

for (let i = 0; i < profile.length; i++) {
    console.log(profile[i]);
}
