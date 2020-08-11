const express = require("express");

const router = express.Router();

const ProjectstList = require("../../models/projects/projects");



router.get("/", (req, res) => {

    ProjectstList.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});



module.exports = router;
