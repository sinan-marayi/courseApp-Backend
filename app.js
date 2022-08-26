const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { courseModel } = require("./courseModel");

const app = express();


const mongourl =
  "mongodb+srv://admin123:database@cluster0.egjrbk0.mongodb.net/courseDb?retryWrites=true&w=majority";
mongoose.connect(mongourl, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/add", (req, res) => {
  const data = req.body;
  console.log(data);
  const courseObject = new courseModel(data);
  courseObject.save((err, data) => {
    if (err) {
      res.json({ status: "error" });
    } else {
      res.json({ status: "success", data: data });
    }
  });
});
app.get("/api/view", (req, res) => {
  courseModel.find((err, data) => {
    if (err) {
      res.send("error find in view API");
    } else {
      res.send(data);
    }
  });
});

app.post("/api/deleteById", (req, res) => {
  var data = req.body;
  courseModel.remove(data, (error, data) => {
    if (error) {
      res.json({ "status": "error" });
    } else {
      res.json({ "status": "success","data":data });
    }
  });
});

app.post("/api/search",(req,res)=>{
    var data = req.body
    courseModel.find(data,(error,data)=>{
        if (error) {
            res.json({"status" : "error"})
        } else {
            res.json({"status" : "success","data":data})
        }
    })
})

app.listen(3000, () => {
  console.log("server Started");
});
