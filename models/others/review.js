const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  review: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("reviews", ReviewSchema);
