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

// let val;
// val = document.querySelector('.product-collection');
// val = val.childNodes[1].nodeName;

// if (val.childNodes[1].nodeType !== 3) {
//     val.childNodes[1].classList.add('MyClass');
// }

// console.log(val);

/**
 * 10.9_Creating element
 */
// <li class="product-collection-item">Sneakers</li>

// let val;
// val = document.querySelector('.product-collection');

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// li.className = 'product-collection-item';
// li.appendChild(document.createTextNode('myItem'))
//     // ul.appendChild(li); // last item add kore.
// ul.prepend(li); // first  add kore.

// console.log(ul);


/**
 * 10.10_Replacing and removing element
 =============================================
 */

// const oldHeading = document.querySelector(".h1");
// const newHeading = document.createElement("h1");

// newHeading.appendChild(document.createTextNode("My Updated product list"));

// const container = document.querySelector(".container");

// container.replaceChild(newHeading, oldHeading);
// oldHeading.replaceWith(newHeading);

// // ** Remove Last Element

// const list = document.querySelector('.product-collection');
// // list.lastElementChild.remove(); // remove element

// list.removeChild(list.lastElementChild);

// console.log(list); // For last child select



/**
 * 10.11_Event introduction
 ======================================
 * Events are everywhere.
 *
 * So Many Events !
 * MDN list over 300 different events!
 * Example => click, Mouseover, dblclick, keypress, drag
 * 
 * 
 */


/**
 * 10.12_Event in practice
 =====================================
 */

// const h1 = document.querySelector('h1');
// h1.addEventListener('click', function(evt) {

//     console.log('Type:', evt.type);
//     console.log('Target', evt.target);
// console.log('offset-X:', evt.offsetX);
// console.log('offset-Y:', evt.offsetY);
//     console.log('client-x:', evt.clientX);
//     console.log('client-y:', evt.clientY);
//     console.log('Clicked H1');
// });


/**
 * This in formation use other elements like li then  follow below:-
 */

// const h1 = document.querySelector('h1');
// const li = document.querySelector('li');
// const lis = document.querySelectorAll('li');

// const form = document.forms[0];
// const input = document.getElementById('productName');

// function evtInformation(evt) {
//     evt.preventDefault();
//     console.log('Type:', evt.type);
//     console.log('Target:', evt.target);
//     console.log('Input Value:', input.value);

// console.log('Target Value', evt.target.innerText);

// console.log('offset-X:', evt.offsetX);
// console.log('offset-Y:', evt.offsetY);
// console.log('client-x:', evt.clientX);
// console.log('client-y:', evt.clientY);
// console.log('Clicked H1');
// }

// h1.addEventListener("click", evtInformation);

// lis.forEach(li => {

//     li.addEventListener("click", evtInformation)
// });

// form.addEventListener('submit', evtInformation);


/**
 * 10.13_It's your time to practice
 ============================================
 * Event Bubbling   => Up or Children to Parent.
 * Event Delegation => Parent to children.
 */

//  * Event Bubbling   => Up or Children to Parent.
// const li = document.querySelector('li');
// const ul = document.querySelector('ul');
// const container = document.querySelector('.container');

// li.addEventListener('click', () => {
//     console.log('You Clicked li');
// });
// ul.addEventListener('click', () => {
//     console.log('You Clicked ul');
// });
// container.addEventListener('click', () => {
//     console.log('You Clicked container');
// });
// console.log(li);


//  * Event Delegation => Parent to children.

// const li = document.querySelector('li');
// const ul = document.querySelector('ul');
// const container = document.querySelector('.container');


// container.addEventListener('click', (evt) => {
//     if (evt.target.id === 'sample') {
//         evt.target.classList.add('custom');
//     }
// });
// console.log(li);


/**
 * 10.15_Event delegation in practice
 =========================================
 * 
 * 
 */

const ul = document.querySelector('ul');
const form = document.forms[0];
const input = document.getElementById('productName');

function evtInformation(evt) {
    evt.preventDefault();
    console.log('Type:', evt.type);
    console.log('Target:', evt.target);
    const li = document.createElement('li');
    li.textContent = input.value;
    li.className = 'product-collection-item';
    ul.appendChild(li);
    // console.log('Target Value:', evt.target.innerText);
}

form.addEventListener('submit', evtInformation);


const lis = document.querySelectorAll('li');

ul.addEventListener('click', (evt) => {
    if (evt.target.className = 'product-collection-item') {
        console.log(evt.target);
    }
});
// lis.forEach(li => {
//     li.addEventListener('click', evtInformation);
// });