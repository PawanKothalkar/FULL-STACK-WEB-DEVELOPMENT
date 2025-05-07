import express from "express";

const app=express();
const port = 3000;

    const today = new Date("July 24");
    const day = today.getDay();



app.get("/",(req,res)=>{

    

    let daytype = "a weekday";
    let advice = "to work hard";


    if(day===0 || day===6){
      daytype="the weekend";
      advice="to have some fun";
    }

    res.render("index.ejs",{
      day:daytype,
      adv:advice,
    })

  });
  //console.log(day);

app.listen(port,()=>{
  console.log('Listening on port ${port}');
})