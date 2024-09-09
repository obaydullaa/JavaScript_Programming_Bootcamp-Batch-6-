/**
 * 3.scope chain
 * ------------------------------
 *  Bubble Up (nice thake uporer thak search korte korte jai )
 */


a = 10 ;

function showScopeChain() {
    let b= 20;
    function myFunc() {
        b= 22;
        let c = 30
        console.log(a)
        console.log(b)
        console.log(c)
    }
    myFunc()
}


showScopeChain()




