const express = require("express");

const router = express.Router();

const WorkOrder = require("../../models/work-order/work-order");

router.post("/updateWork", (req, res) => {
  console.log(req.body);
  const data = req.body.name;
  var query = { _id: req.body.helper };

  WorkOrder.findOneAndUpdate(query, req.body, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        msg: "server error",
      });
    } else {
      console.log(req.body)
      res.json({
        msg: "data saved succefully",
      });
    }
  });
});
router.get("/", (req, res) => {
  WorkOrder.find({})
    .populate("agentId")
    .then((data) => {
      // for(var i = 0; i < data.length; i++){
      // result = data[i]["numberOrder"];
      // }
      // console.log(result)
      res.send(data)    

    })
    .catch((error) => {
      console.log("error", error);
    });
});
router.get("/enqueue", (req, res) => {
  WorkOrder.find({ state: 'Enqueue' })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

module.exports = router;
