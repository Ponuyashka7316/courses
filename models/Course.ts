import mongoose, { Schema, SchemaTypes, model } from "mongoose";

const courseSchema = new Schema({
  title: String,
  description: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  pic: String,
  picture: String,
  chapters: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Chapter",
      required: false,
    },
  ],
});

courseSchema.pre("save", function (next) {
  this.updatedAt = new Date(); // update the date every time a blog post is saved
  next();
});

const Course = mongoose.models.Course || model("Course", courseSchema);
export default Course;
