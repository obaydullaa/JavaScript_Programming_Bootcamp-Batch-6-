/**
 * 5.4.Ternary operator
 */


const isAdmin = true;
const ProfileWoner = false;

// if (isAdmin && ProfileWoner) ? {
//     console.log('Yess I am  admin and I am the owner of the profile');
// } else {
//     console.log('Something went Wrong');
// }

// Ternary Iperator
const isEverythingRight = (isAdmin && ProfileWoner) ? 'Yess I am  admin and I am the owner of the profile.' : 'Something went Wrong.';

console.log(isEverythingRight);