const express = require("express");

const router = express.Router();

const WorkersList = require("../../models/workers/worker");



router.post("/", (req, res) => {
 const data = req.body.name
 console.log(data)
 WorkersList.findOneAndDelete({name: data})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});



module.exports = router;
