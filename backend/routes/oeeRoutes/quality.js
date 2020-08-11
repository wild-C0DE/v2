const express = require("express");

const router = express.Router();

const ProjectsList = require("../../models/projects/projects")
router.get('/', (req, res) => {
    
    ProjectsList.aggregate([
            {$match :{}}

    ]).then (result => {
         for (var i =0; i < result.length; i++){
             result[i].quality = (result[i].goodPartsProduced / result[i].totalPartsProduced).toFixed(2)
         }
         return result
     }).then (result => {
         res.send(result)
     })
    })

module.exports = router;
