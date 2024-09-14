/**
 *  1. Clear Idea about the project(granual details)
 *  2. Visualize the flow
 * 
 * Thought Process => Bojte hobe or dorte  hobe ki vabe think korse all follow korte hobe...
 * Focus is main key(Important)
 */
/**
 * * যখন আমরা ইজারের থেকে কোন ইনপুট নিব সবসময় সেই ইনপুট স্ট্রিং হিসাবে রিসিভ  হবে । 
 */

(function() {

    //Selector
    const formElm = document.querySelector('form');
    const userInputElm = document.querySelector('#luck-input');
    const luckyNumberElm = document.querySelector('.lucky-number span');
    const p1BtnElm = document.querySelector('.p1Btn');
    const p2BtnElm = document.querySelector('.p2Btn');
    const p1InputElm = document.querySelector('.p1');
    const p2InputElm = document.querySelector('.p2');
    const winnerElm = document.querySelector('.winner');
    const resetBtnElm = document.querySelector('.resetBtn');

    let luckNumber;
    let p1value;
    let p2value;
    let p1Turn;
    let p2Turn;
    let gameOver;

    function initialState() {
        luckNumber = 10;
        p1value = 0;
        p2value = 0;
        p1Turn = true;
        p2Turn = true;
        gameOver = false;
    }

    function initialView() {
        // Showing into DOM
        luckyNumberElm.textContent = luckNumber;
        p1InputElm.textContent = 0;
        p2InputElm.textContent = 0;
        p1BtnElm.removeAttribute('disabled');
        p2BtnElm.removeAttribute('disabled');
    }
    initialState();
    initialView();

    function winnerState(player) {

        gameOver = true;
        //P1 is winner
        winnerElm.textContent = `${player} is Winner`;

        // disabling p2Btn player
        p2BtnElm.setAttribute('disabled', 'disabled');
        // disabling p1Btn player
        p1BtnElm.setAttribute('disabled', 'disabled');
    }

    formElm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        //receiving the input
        luckNumber = parseInt(userInputElm.value);
        if (luckNumber) {
            //insert into lickyNumber Element
            luckyNumberElm.textContent = luckNumber;
        }
        // reset the input
        userInputElm.value = '';
    })

    p1BtnElm.addEventListener('click', (evt) => {

        if (p1Turn && luckNumber !== p1value && luckNumber !== p2value) {
            // Increment the p1 value
            p1value++;
            // Insertin into DOM
            p1InputElm.textContent = p1value;
            //Switch of p1Turn and start p1Turn
            p1Turn = true;
            //Show visual marker
            p1BtnElm.setAttribute('disabled', 'disabled');
            p2BtnElm.removeAttribute('disabled');
        }

        if (p1value === luckNumber) {
            winnerState('P1');
        }
    })

    p2BtnElm.addEventListener('click', (evt) => {
        if (p2Turn && luckNumber !== p1value && luckNumber !== p2value) {

            // Increment the p1 value
            p2value++;
            // Insertin into DOM
            p2InputElm.textContent = p2value;
            //Switch of p1Turn and start p1Turn
            p2Turn = true;
            //Show visual marker
            p2BtnElm.setAttribute('disabled', 'disabled');
            p1BtnElm.removeAttribute('disabled');
        }

        if (p2value === luckNumber) {
            winnerState('P2');
        }
    });

    resetBtnElm.addEventListener('click', (evt) => {
        initialState();
        initialView();
        winnerElm.textContent = '';
    });

}())