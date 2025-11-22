const button = document.querySelector('#myBtn');
button.addEventListener('click',() =>{
    console.log('ボタンがクリックされました');
})

const inputBox = document.querySelector('#myinput');
const outputDiv= document.querySelector('#displayArea')
const lastButton = document.querySelector('#showBtn')

lastButton.addEventListener('click',()=>{
    const value = inputBox.value;
    outputDiv.textContent=value
})