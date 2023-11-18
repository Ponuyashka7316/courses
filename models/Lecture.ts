import mongoose, { Schema, SchemaTypes, model } from "mongoose";

const lectureSchema = new Schema({
  title: String,
  description: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  chapterId: SchemaTypes.ObjectId,
});

const Lecture = mongoose.models.Lecture || model("Lecture", lectureSchema);

export default Lecture;
