
/**
 * 7.Reduce practice-2
 *----------------------------
 */
// Reduce i very powerful array method
//-----------
// It works with an array 
// return an reduced value based on you
// must return from the call back function 
// doesn't mutate the original array

// acc --- cur
//  1  --- 2 = 3
// 3   --- 3 = 6
// 6   --- 4 = 10

// for acc 10
// 10  ---- 1 = 11
// 11 ----- 2 = 13
// 13 ----- 3 = 16
// 16 ----- 4 = 20

// let arr = [1, 2, 3, 4];

// let result = arr.reduce((accumulator, current) => {
//     console.log(accumulator, current);
//     return  accumulator + current;
// }, 10);

// console.log(result)



let people = [
  { name: 'Alice', age: 21},
  { name: 'Max', age: 20},
  { name: 'Jane', age: 20,}
]

// ans: groupe People is:
// {
//   20: [
//     {name: 'Max', age: 20},
//     {name: 'Jane', age: 20},
//   ],
//   21: [{name: 'Alice', age: 21}]
// }

function  groupBy(objArr, property) {

   let groupByProp = objArr.reduce((accumulator, current) => {
      let prop = current[property];
      console.log(current)
      
      if(prop in accumulator ) {
        accumulator[prop].push(current);
      }else {
        accumulator[prop] = [current]
      }

      return accumulator;

    }, {});

    return groupByProp;
}

console.log(groupBy(people, 'age'));

