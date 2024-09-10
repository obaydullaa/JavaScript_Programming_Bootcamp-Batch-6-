/*
 * 10.2 _DOM in practice

 * 10.3_window obj

 */
// let val;
// let val = document;
// val = document.head;
// val = document.body;
// val = document.all;
// val = document.all[5];
// val = document.title;
// val = document.links[0];
// val = document.characterSet;
// val = document.forms[0];
// val = document.forms[0].action;
// val = document.forms[0].method;
// val = document.scripts;
// console.log(val)

/**
 * 10.4_Selecting element
 * 
 * Mehods
 * document.getElementById()
 * document.getElementsByClassName()
 * document.getElementsByTagName()
 * document.querySelector()
 * document.querySelectorAll() // Select All   Element
 * 
 * It return array we apply array methods
 * 
 * "querySelectorAll" Accessing specific element.
 * 
 * Between HTML Collection & NodeList
 * HTML Collection => We can't applied array all method.
 * NodeList => We applied all array method.
 */

// val = document.getElementById('container');
// val = document.getElementsByClassName('container')[0];
// val = document.getElementsByTagName('body')[0];
// val = document.querySelector('.product-collection-item');
// val = document.querySelector('#container');
// val = document.querySelectorAll('.product-collection-item')[3];

// console.dir(val);


/**
 * 10.5_HTMLCollection vs NodeList
 * 
 * We can't work forEach but we can work by for and for of loop.
 * If we work forEach loop first of all conver arry ( Array())
 */

/**
 * HTMLCollection
 * 
 * We can't work forEach but we can work by for and for of loop.
 * If we work forEach loop first of all conver arry ( Array())
 */

// let val;

// val = document.getElementsByClassName("product-collection-item");

// val = Array(val);
// val.forEach(node => console.log(node));

// for (let i = 0; i < val.length; i++) {
//     console.log(val[i]);
// }

// for (let node of val) {
//     console.log(node);
// }

// console.dir(val);

/**
 * NodeList
 * 
 * NodeList => We applied all array method.
 */

// let val;

// val = document.querySelectorAll(".product-collection-item");

// val = Array(val);
// val.forEach(node => console.log(node));

// for (let i = 0; i < val.length; i++) {
//     console.log(val[i]);
// }

// for (let node of val) {
//     console.log(node);
// }

// console.dir(val);

/**
 * 10.6 _Manipulating element
 */

// Selection

// let val;

// val = document.querySelector('.product-collection-item');

//manipulation
// val.style.color = 'red';
// val.style.backgroundColor = '#ddd';

// val.textContent = 'Jhota';
// val.innerText = 'Boot';
// val.innerHTML = '<em>Shirt</em>';

// val = document.querySelector('a');
// val = document.querySelector('a').setAttribute('href', 'https://facebook.com');

// val = val.className;
// val = val.classList;
// val = val.classList.add('myclass');
// val = val.className = 'myclass';

// console.log(val);


/**
 * 10.7_Traversing DOM
 */
// let val;
// val = document.querySelector('.product-collection');
// console.log(val);

// val = val.childNodes;
// val = val.children[0].nextElementSibling.nextElementSibling.parentElement.parentElement;
// console.log(val);

/**
 * 10.8_Interacting with childNodes
 */

/**
 * .ParentElement
 
 * 1 - Element
 * 2 - Attribute (deprecated)
 * 3 - Tex node
 * 8 - Comment
 * 9 - Document itself
 *10 - Doctype
 */

let val;
val = document.querySelector('.product-collection');
// val = val.childNodes[1].nodeName;

if (val.childNodes[1].nodeType !== 3) {
    val.childNodes[1].classList.add('MyClass');
}

console.log(val);