const { Schema } = require("mongoose");
const mongo = require("../../db");

const VideoSchema = new Schema({
  title: { type: String, default: "Video sem título" },
  youtubeId: String,
  thumbnail: String,
  likes: { type: Number, default: 0 },
  unlikes: { type: Number, default: 0 },
  comments: Array
});

module.exports = mongo.model("video", VideoSchema);
