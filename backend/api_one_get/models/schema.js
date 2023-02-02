const mongoose = require('mongoose');

const schema_for_getting_data = new mongoose.Schema({

    bit_coin_name: { type: String},
    bit_coin_count: { type: Number },
    bit_coin_icon:{type:String},
    bit_coin_abbreviation: { type: String },
    reminder_price: { type: String },
    actual_price: { type: Number },
    change_price: { type: Number },
    desired_price: { type: Number }
})

const schema_defined = mongoose.model("crypto_get", schema_for_getting_data);

module.exports = schema_defined;
