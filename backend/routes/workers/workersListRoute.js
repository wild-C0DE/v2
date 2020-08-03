const express = require("express");

const router = express.Router();

const WorkersList = require("../../models/workers/worker");



router.get("/", (req, res) => {

  WorkersList.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});



module.exports = router;
