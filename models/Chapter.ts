import mongoose, { Schema, SchemaTypes, model } from "mongoose";

const chapterSchema = new Schema({
  title: String,
  createdAt: Date,
  updatedAt: Date,
  published: Boolean,
  courseId: SchemaTypes.ObjectId,
  lectures: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Lecture",
      required: false,
    },
  ],
});
const Chapter = mongoose.models.Chapter || model("Chapter", chapterSchema);

export default Chapter;
