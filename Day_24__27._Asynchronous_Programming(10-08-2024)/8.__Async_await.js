/**
 * 8.Async await
 * -----------------------
 */


function one(fn){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(1);
            // reject(new Error(1));
        }, 2000)
    }) 
}

function two(fn){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(2);
            // reject(new Error(1));
        }, 2000)
    }) 
}

function three(fn){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(3);
            // reject(new Error(1));
        }, 2000)
    }) 
}


async function run() {
   try {
    let out1 = await one();
    let out2 = await two();
    let out3 = await three();
    return [out1, out2, out3];
   }catch(err) {
    return err
   }

}


(async function() {
      console.log(await run());
})();

