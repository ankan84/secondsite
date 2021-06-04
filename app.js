const express=require('express');
const app=express();
const PORT=process.env.PORT||5000;

app.get('/',(req,res)=>{

    res.send("this is my home page ");
})
app.get('/about',(req,res)=>{

    res.send("this is my about page ");
})
app.get('/contact',(req,res)=>{

    res.send("this is my contact page ");
})

app.listen(PORT,()=>{
  console.log(`we are listen at port${PORT}......`);
})

