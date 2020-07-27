const express = require("express");

const router = express.Router();

const MachineList = require("../../models/machines/machine");

router.post("/", (req, res) => {
  console.log(req.body);
  const data = req.body.name;
  var query = { _id: req.body.helper };

  // const newMachineList = new MachineList(data);
  //save the data
  MachineList.findOneAndUpdate(query, req.body, (error) => {
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

// router.post('/login', (req, res) => {
//     Login.findOneAndUpdate(
//           {phoneNumber: req.body.phoneNumber},
//           { $set: {phoneNumber: req.body.phoneNumber }},
//           {new: true, upsert: true }
//         )
//         .then((login) => login.view(true))
//         .then(success(res, 201))
//         .catch(next)
//     })
//     }
