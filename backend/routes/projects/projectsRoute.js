const express = require("express");
const router = express.Router();

const ProjectsList = require("../../models/projects/projects");

router.post("/",(req,res)=>{
 console.log(req.body)
//   req.body.dateOfUse = Date.parse(req.body.dateOfUse)
  var newProjectsList = new ProjectsList(req.body);
   newProjectsList.save((error) => {
    if (error) {
      res.status(500).json({
        msg: "server error",
      });
    } else {
      res.json({
        msg: "data saved succefully",
      });
    }
  });

})


module.exports = router