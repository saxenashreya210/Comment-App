const express = require("express");
const res = require("express/lib/response");
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/CommentApp";
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
const User = require("./user");
const Feedback =require('./feedback');
const { Router } = require("express");
app.use(express.json());
try {
  con.on("open", () => {
    console.log("connected");
  });
} catch (error) {
  console.log("Error: " + error);
}

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.post('/login',(req,res,next)=>{
    User.find({email:req.body.email}).exec().then(user=>{
        if(user.length<1)
        {
            return res.status(401).json({
                msg:'user not exist'
            })
        }
         if(req.body.password == user[0].password){
            res.status(200).json({
                email:user[0].email
            })
            }
        else{
            res.status(401).json({
                msg:'not matched'
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })
})
    
    
app.post("/adduser", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/getusers", async (req, res) => {
    const users = await User.find();
    console.log(users);
    res.status(201).send(users);
  });

  app.post("/addcomment", (req, res) => {
    const feedback = new Feedback(req.body);
    feedback
      .save()
      .then(() => {
        res.status(201).send(feedback);
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  });

  app.get("/getcommentbymail",(req,res)=>{
    Feedback.find({email:req.body.email}).exec().then(user=>{
        if(!user){
            res.status(401).json({
                msg: 'no comments'
            })
        
        }
        else{
            res.status(200).send(user)
        }
    })
    .catch((e) => {
        res.status(400).send(e);
      });
  })