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


