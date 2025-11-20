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












