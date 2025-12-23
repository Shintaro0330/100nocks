const express = require('express');
const app = express();
const port =3000;

let items=[
    {id:1,name:'A'},
    {id:2,name:'B'},
    {id:3,name:'C'}
];

app.use(express.json());

app.delete('/api/items/:id',(req,res)=>{
    const id=parseInt(req.params.id);

    const initialLength = items.length;
    items=items.filter(item=>item.id !== id);

    if (items.length<initialLength) {
        res.status(200).json(items);
    }else{
        res.status(404).send('指定されたIDのアイテムが見つかりません')
    }
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});