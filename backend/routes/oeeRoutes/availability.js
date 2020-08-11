const express = require("express");

const router = express.Router();

const ProjectsList = require("../../models/projects/projects")
const WorkOrder = require("../../models/work-order/work-order");
router.get('/', (req, res) => {
     ProjectsList.find({}).then(result => {
         const helper = result
        WorkOrder.aggregate([
            {$match :{}},
            {$group: {_id: "$machine", stopTime: {$sum:"$duration"}, same_machine :{$sum:1}}},
            
            
          ]).then(result => {
              
              let total = []
              for(let i = 0;i<result.length;i++ ){
                  for(let j = 0 ; j<helper.length;j++){
                     // console.log(result[i]._id)
                      if(result[i]._id===helper[j].machine){
                          
                          helper[j]["runTime"] = result[i].stopTime
                          total.push(helper[j]) 
                         
                      }
                  }
              }
              
              return total

          }).then(result => {
            //   console.log(result)
                 for(var i =0;i<result.length;i++){
                     result[i]["goodPartsProduced"] = result[i].plannedProdTime- result[i].runTime
                     result[i]["totalPartsProduced"] = ((result[i].goodPartsProduced/result[i].plannedProdTime)*100)
                 }
                 
             return result
          }).then(result =>{
            //   console.log(result)
            for(var i = 0; i < result.length; i++){
                result[i]["totalPartsProduced"]= ((result[i]["totalPartsProduced"]).toFixed(2)) 
            }  
            
            return result
        }).then (result => {

            res.send(result)})
        })


     })


module.exports = router;
