//importing express
const express = require('express')
const foodModel = require("./model")
const cardModel = require("./mode")
const cors =require('cors')
const { model } = require('mongoose')
const orderModel = require("./order")
const Feedback = require('./feedback');
// 2.initalization
const app =express()
// middelwere || passing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());
//api creation
app.get('/abhilash',(req,res)=>{
    res.send("I am abhilash")
})
//  api for adding data
app.post('/add',async(req,res)=>{
    var result = await new foodModel(req.body)
    result.save()
    res.send("data added")
})


//api for login
app.post("/login", (req, res) => {
    const { onumber, opass } = req.body;
    foodModel.findOne({ onumber: onumber })
        .then(user => {
            if (user) {
                if (user.opass === opass) {
                    res.json("success")
                } else {
                    res.json("password is incorrect")
                }
            } else {
                res.json("no data existed")
            }
        })
        .catch(err => console.log(err));
})

// code to add data to card
app.post('/add1',async(req,res)=>{
    var data = await new cardModel(req.body)
    data.save()
    res.send("data added")
})


//to view the card deytails
app.get('/view',async(req,res)=>{
    let data = await cardModel.find()
    res.json(data)
    console.log("data")
})


// APIs for orderModel
app.post("/order", async (req, res) => {
    var data = await new orderModel(req.body).save();
    res.send("order placed");
  });
  
  app.get("/orders", async (req, res) => {
    let data = await orderModel.find();
    res.json(data);
    console.log("data")
  });


  // API for submitting feedback
app.post('/feedback', async (req, res) => {
    const { name, email, rating, message } = req.body;
    const feedback = new Feedback({ name, email, rating, message });
    feedback.save()
      .then(() => {
        res.status(201).json({ message: 'Feedback submitted successfully' });
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
        res.status(500).json({ error: 'An error occurred while submitting feedback' });
      });
  });
  
  // API for retrieving feedback
  app.get('/feedback', async (req, res) => {
    Feedback.find()
      .then(feedback => {
        res.json(feedback);
      })
      .catch(error => {
        console.error('Error retrieving feedback:', error);
        res.status(500).json({ error: 'An error occurred while retrieving feedback' });
      });
  });
  

// 4.port
app.listen(3006,()=>{
    console.log("port 3006 is up and running")
})

app.get('/Update',async (req, res)=> {
  var data = await Food.find()
  res.json(data)
  console.log(data)
})

// Deleting a data
app.delete('/remove/:id',async(req,res)=>{
  console.log(req.params);
  let id = req.params.id
  await cardModel.findByIdAndDelete(id);
  res.send("Deleted")

})

app.put('/edit/:id',async(req,res)=>{
  let id = req.params.id
  await cardModel.findByIdAndUpdate(id,req.body);
  res.send("updated")
  })
