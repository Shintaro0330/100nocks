HTTP（HyperText Transfer Protocol）はWeb通信の仕組みで、ブラウザとサーバ間でデータを送受信するためのプロトコル。リクエストとレスポンスで構成され、ステートレス（通信ごとに独立）なのが特徴。主にGET（取得）やPOST（送信）が使われる。現在はHTTP/1.1（汎用性・持続接続）、HTTP/2（並列通信・高速化）、HTTP/3（UDPベース・低遅延）が広く利用されて


問題30
04.html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Git練習ページ</title>
</head>
<body>
 <div class="button">
 <a href="#">ホバーで色が変わります</b></div>
 <link rel="stylesheet" type="text/css" href="b.css">
 <script src="main.js"></script>
</body>
</html>

main.js
console.log("Hello,JavaScript!");

問題31
main.js
var box={
    box1:'上着',
    box2:'靴下',
    box3:'帽子',
    role:function(gomi){
    return '破れた' + gomi;
}
};


var clothes =['マフラー','パーカー','手袋'];

console.log(box);

console.log(box.role(clothes[2]));

console.log(clothes[2]);

<img width="286" height="642" alt="image" src="https://github.com/user-attachments/assets/4b5c1f42-14f3-43d1-8faa-be388bdca036" />

問題32
var alphabet={
    x:10,
    y:9,
    z:8
};


if(alphabet.x + alphabet.y >= alphabet.x + alphabet.z){
    console.log('yはzより大きい');
}else{
    console.log('yはzより小さい');
}

<img width="503" height="625" alt="image" src="https://github.com/user-attachments/assets/57b3adcd-110c-4905-a286-693664a30e6a" />

問題33
var data = ['red','black','white'];
for (var key in data){
    console.log(data[key]);
}
<img width="405" height="628" alt="image" src="https://github.com/user-attachments/assets/868bc8c2-57a8-4e58-ab52-1df4f4d85193" />

問題34
問題31と同様

問題35
main.js
const button = document.querySelector('#myBtn');
button.addEventListener('click',() =>{
    console.log('ボタンがクリックされました');
})

04.html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Git練習ページ</title>
</head>
<body>
 <button id="myBtn">ホバーで色が変わります</button>
 <link rel="stylesheet" type="text/css" href="b.css">
 <script src="main.js"></script>
</body>
</html>

<img width="299" height="677" alt="image" src="https://github.com/user-attachments/assets/55ad1260-d93b-4380-84d2-13a17eba306c" />

問題36
main.js
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

04.html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Git練習ページ</title>
</head>
<body>
  <button id="myBtn">ホバーで色が変わります</button>
  <input type="text" id="myinput">
  <div id ="displayArea"></div>
  <button id="showBtn">値を表示</button>
  <link rel="stylesheet" type="text/css" href="b.css">
  <script src="main.js"></script>
</body>
</html>

<img width="568" height="374" alt="image" src="https://github.com/user-attachments/assets/b2b3271d-e9ed-4a07-bd75-42ee2afad8ed" />

問題37
04.html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Git練習ページ</title>
</head>
<body>
  <button id="myBtn">ホバーで色が変わります</button>
  <input type="text" id="myinput">
  <div id ="displayArea"></div>
  <button id="showBtn">値を表示</button>
  <p id="msg">こんにちは</p>
  <button id="change">押してみてね</button>
  <link rel="stylesheet" type="text/css" href="b.css">
  <script src="main.js"></script>
</body>
</html>

main.js
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

<img width="515" height="311" alt="image" src="https://github.com/user-attachments/assets/fa6b1b49-0271-430d-ac51-398a2d85b35e" />

<img width="449" height="279" alt="image" src="https://github.com/user-attachments/assets/5043f985-2703-4f77-9f3b-903491f3ecc1" />

問題39
04.html

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Git練習ページ</title>
</head>
<body>
  <button id="myBtn">ホバーで色が変わります</button>
  <input type="text" id="myinput">
  <div id ="displayArea"></div>
  <button id="showBtn">値を表示</button>
  <p id="msg">こんにちは</p>
  <button id="change">押してみてね</button>

  <input type="text" id="inputvalue">
  <button onclick="addItem()">追加</button>
  <ul id="itemList"></ul>
  <link rel="stylesheet" type="text/css" href="b.css">
  <script src="main.js"></script>
</body>
</html>

main.js

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

問題48

ソースコード
<img width="408" height="638" alt="image" src="https://github.com/user-attachments/assets/21ccac18-2bd7-4de1-a56e-fcddc484a578" />


結果
<img width="359" height="85" alt="image" src="https://github.com/user-attachments/assets/b5658ab8-01e6-486e-a3c9-34efdc8249ab" />

問題51



<img width="710" height="368" alt="スクリーンショット 2025-12-20 230357" src="https://github.com/user-attachments/assets/5a858d84-b299-4f41-8f58-96c478f9897d" />

<img width="592" height="171" alt="スクリーンショット 2025-12-20 230602" src="https://github.com/user-attachments/assets/874eb590-2053-4260-8fdc-c350113146d1" />

<img width="627" height="164" alt="スクリーンショット 2025-12-20 230625" src="https://github.com/user-attachments/assets/7888a034-2d70-4eca-9bd1-890efae557c7" />


