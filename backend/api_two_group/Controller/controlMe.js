//const { schema } = require("../models/schema");
const schema_defined = require("../Model/schemaModel");
const mongoose = require("mongoose");

const getting_all_the_data = async (req, res) => {
  try {
    const data_get = await schema_defined.find();
    res.json(data_get);
  } catch (error) {
    res.status(400).json({
      message: "Couldn't get data",
    });
  }
};

const posting_data_to_DB = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(id);

    const router = new schema_defined({
      bit_coin_name: req.body.bit_coin_name,
      bit_coin_count: req.body.bit_coin_count,
      bit_coin_icon: req.body.bit_coin_icon,
      bit_coin_abbreviation: req.body.bit_coin_abbreviation,
      reminder_price: req.body.reminder_price,
      actual_price: req.body.actual_price,
      change_price: req.body.change_price,
      desired_price: req.body.desired_price,
      group_id: id,
    });

    const updatedData = await router.save();
    console.log(updatedData);

    if (!router) {
      return res.status(404).json({
        message: "Data not found",
      });
    }

    res.json(router);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Couldn't POST Data",
    });
  }
};

module.exports = {
  getting_all_the_data,
  posting_data_to_DB,
};
