const express = require("express");
const router = express.Router();

const MenuItem = require("./../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const content = req.body;
    const newMenu = new MenuItem(content);
    const result = await newMenu.save();
    console.log("data saved");

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const content = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(content);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste == "sweet" || taste == "spicy" || taste == "sour") {
      const response = await MenuItem.find({ taste: taste });
      console.log("responce fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid taste type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//comment added
module.exports = router;
