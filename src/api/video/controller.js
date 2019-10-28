const VideoModel = require("./model");

const findOne = async ({ params }, res) => {
  const { id } = params;
  const foundVideo = await VideoModel.findById(id);
  res.json({ data: foundVideo });
};

/** search for all videos */
const findAll = async (_, res) => {
  const foundVideos = await VideoModel.find();
  res.json({ data: foundVideos });
};

/** create a new video */
const create = ({ body }, res) => {
  VideoModel.create(body);
  res.sendStatus(204);
};

/** add like */
const like = async ({ params }, res) => {
  const id = params.id;

  // increase likes quantity.
  const foundVideo = await VideoModel.findById(id);
  await foundVideo.updateOne({ likes: foundVideo.likes + 1 });

  res.sendStatus(204);
};

/** add unlike */
const unlike = async ({ params }, res) => {
  const id = params.id;

  // increase unlikes quantity.
  const foundVideo = await VideoModel.findById(id);
  await foundVideo.updateOne({ unlikes: foundVideo.unlikes + 1 });

  res.sendStatus(204);
};

/** add comments to the video */
const addComment = async ({ params, body }, res) => {
  const id = params.id;

  // increase unlikes quantity.
  const foundVideo = await VideoModel.findById(id);
  await foundVideo.updateOne({
    comments: [...foundVideo.comments, body.comment]
  });

  res.sendStatus(204);
};

module.exports = {
  findOne,
  findAll,
  create,
  like,
  unlike,
  addComment
};
