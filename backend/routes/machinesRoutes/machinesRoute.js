const express = require("express");

const router = express.Router();
const multer = require("multer");
const MachineList = require("../../models/machines/machine");

const storage = multer.diskStorage({
  destination: "../frontend/src/assets/img",
  // (req, file, callBack) => {
  // callBack(null, "/");
  //},
  filename: (req, file, callBack) => {
    callBack(null, `machin_${file.originalname.replace(" ", "")}`);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("file"), (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  const data = req.body;
 // data.image =  "../../../assets/img/"+req.file.filename
  // req.file.path.replace("\\", "/");

  console.log(Object.values(data));

  const newMachineList = new MachineList(data);

  //save the data
  newMachineList.save((error) => {
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
