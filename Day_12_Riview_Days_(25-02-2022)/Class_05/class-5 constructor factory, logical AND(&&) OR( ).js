//Logical AND(&&) Logical OR(||)

const age = 18
const result = age === 18 && 'You can vote'
console.log(result)

// (&&) - Result will be  true if every parts are true
//otherwise false
//true addiction
// console.log(true && true )
// console.log(true && false)
// console.log(true && false && true ) //short circuiting
// console.log(true && 0 && true ) //short circuiting

// console.log(true && 'Hello' && 'world' ) //short circuiting
// console.log(true && 'Hello' && 0 ) //short circuiting

// (||) - Result will be true if  any part is true
//otherwise false
//true addiction
// console.log(true || false) //short circuiting
// console.log('Hello' || false) //short circuiting
// console.log(false || true)
// console.log(false || 'world' || false )
// console.log(false || false)
// console.log(false || false || '')

//copy by value copy reference
// let a = 10 //10
// const b = a  //10
// a = 20 //20
// console.log(a, b)

// //reference/complex data type
// const aObj = {
//     val: 10
// } // 10
// const bObj = aObj  //10

// aObj.val = 20 //20
// console.log(aObj, bObj)

// pass by Value
// function passByValue(received) {
//   received = 20
//   console.log(received)
// }
// const a = 10
// passByValue(a)

// console.log(a)

// function passByRef(receivedObj) {
//   receivedObj.val = 20
//   //receivedObj = 'random'
//   console.log(receivedObj)
// }
// const aObj = {
//   val: 10,
// }
// passByRef(aObj)

// console.log(aObj)

//accessing nested object,  array

// const arr = [
//   1,
//   2,
//   3,
//   { val: 1 },
//   function () {
//     return 'Hello'
//   },
//   [10, [20, 30, [40]]],
// ]
// //arr.length is one less from index
// console.log(arr.length)
// console.log(arr[3].val)
// console.log(arr[4]())
// console.log(arr[arr.length - 1][1][2][0])

// const obj = {
//   a: 1,
//   b() {
//     return 'Hi'
//   },
//   c: [1, 2, 4],
//   d: {
//     e: 1,
//     f: 2,
//     g: {
//       h: 3,
//     },
//   },
// }

// console.log(obj.a)
// console.log(obj.b())
// console.log(obj.c[2])
// console.log(obj.d.g.h)

//factory function
//constructor function

// function createPerson(lastName, age) {
//   return {
//     lastName,
//     age,
//     fullName() {
//       return this.lastName + ' ' + this.age
//     },
//   }
// }

// const result1 = createPerson('Hasan', 30)
// console.log(result1.fullName())

// const result2 = createPerson('khan', 20)
// console.log(result2)

// const samim = {
//   lastName: 'Hasan',
//   age: 30,
// }

// const Anis = {
//   lastName: 'khan',
//   age: 20,
// }

//constructor function

function Person(lastName, age) {
  //this = {}
  console.log(this)

  this.lName = lastName
  this.age = age
  this.fullName = function () {
    console.log(this.lName + ' ' + this.age)
  }
  this.arr = [1, 2, 4, 5]
  console.log(this)
}

const samim = new Person('Hasan', 30)
console.log(samim)
samim.fullName()
console.log(samim.arr[0])

// function createPerson(lastName, age) {
//   return {
//     lastName,
//     age,
//     fullName() {
//       return this.lastName + ' ' + this.age
//     },
//   }
// }

// const result1 = createPerson('Hasan', 30)
// console.log(result1.fullName())

// const result2 = createPerson('khan', 20)
// console.log(result2)
