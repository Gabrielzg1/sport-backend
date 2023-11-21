const mongoose = require("mongoose");

const SeggestionSchema = mongoose.Schema({

  playername:{
    type: String,
    require: true,
  },
  
  suggestion: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("suggestions", SeggestionSchema);