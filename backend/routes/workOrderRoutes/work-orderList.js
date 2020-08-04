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
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});
router.get("/enqueue", (req, res) => {
  WorkOrder.find({ state: false })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

module.exports = router;
