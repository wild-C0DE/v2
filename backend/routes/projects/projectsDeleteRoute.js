const express = require("express");

const router = express.Router();

const ProjectsList = require("../../models/projects/projects");



router.post("/", (req, res) => {
 const data = req.body.machine
 console.log(data)
 ProjectsList.findOneAndDelete({machine: data})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

module.exports = router;