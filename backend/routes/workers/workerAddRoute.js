const express = require("express");

const router = express.Router();

const WorkersList = require("../../models/workers/worker");






router.post("/",  (req, res, next) => {
  
  const data = req.body;
 
  console.log(Object.values(data));

  const newWorkersList = new WorkersList(data);

  //save the data
  newWorkersList.save((error) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        msg: "server error",
      });
    } else {
      res.json({
        msg: "data saved succefully",
      });
    }
  });
});

module.exports = router;
