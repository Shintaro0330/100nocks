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

const msg=document.querySelector("#msg");
const changebox=document.querySelector("#change");

changebox.addEventListener('click',() =>{
    msg.textContent='Hello';
});

const items=[];

function addItem(){
    const input = document.getElementById('inputvalue');
    const value = input.value.trim();

    if (value !==""){
        items.push(value);
        displayList();
        input.value="";
    }
}

function displayList(){
    const list = document.getElementById('itemList');
    list.innserHTML ="";

    for (let i =0; i<items.length; i++){
        const li =document.createElement('li');
        li.textContent=items[i];
        list.appendChild(li);
    }
}