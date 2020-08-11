const express = require("express");

const router = express.Router();

const ProjectsList = require("../../models/projects/projects");

router.post("/", (req, res) => {
  console.log(req.body);
  const data = req.body.project;
  var query = { _id: req.body.helper };

  
  ProjectsList.findOneAndUpdate(query, req.body, (error) => {
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