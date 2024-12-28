const express = require("express");

const app = express();

app.use("/hello",(req,res)=>
{
    res.send("helllo heloooo")
});

app.use("/bye",(req,res)=>
    {
        res.send("bye bye")
    });


    app.use("/hii",(req,res)=>
        {
            res.send("hiiii hiiii")
        });

        app.use("/fuck",(req,res)=>
            {
                res.send("fuckkk fuckk")
            });

            app.use("/ouch",(req,res)=>
                {
                    res.send("ouch ouch")
                });
                    
                
app.get("/users",(req,res)=>
    {
        res.send(  {firstname:"riddhi",lastname:"vinayak"});
    });
    
    
app.post("/users",(req,res)=>
    {
        console.log("save your info in the data base ");
        res.send("posted in the data bse")
    });

    
app.delete("/hello",(req,res)=>
    {
        res.send("deleted data from the data base");
    });
    
app.listen(3000,(req,res)=>
    {
    console.log("hi from server");

})
