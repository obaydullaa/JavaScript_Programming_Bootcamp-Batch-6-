/**
 * 5.6.If and Else if
 */


// const isAdmin = true;
// // const ProfileWoner = false;

// // if (isAdmin && ProfileWoner) ? {
// //     console.log('Yess I am  admin and I am the owner of the profile');
// // } else {
// //     console.log('Something went Wrong');
// // }

// // Ternary Iperator
// // const isEverythingRight = (isAdmin && ProfileWoner) ? 'Yess I am  admin and I am the owner of the profile.' : 'Something went Wrong.';

// // console.log(isEverythingRight);

// const isEverythingRight = isAdmin && 'Yess I am  admin and I am the owner of the profile';

// // console.log(isEverythingRight);

// if (isEverythingRight) {
//     console.log('Something went wrong')
// }

const price = 20;
// if price less then or equal $10  no shiping
if (price <= 10) {
    console.log('No Shipping');
} else if (price <= 20) {
    console.log('Free Shipping Avaiable');
} else {
    console.log('Special Discount Applied');
}