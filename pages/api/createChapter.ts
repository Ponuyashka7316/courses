import type { NextApiRequest, NextApiResponse } from "next";
import mongoose, { Schema, SchemaTypes, model } from "mongoose";
import Course from "@/models/Course";
import Chapter from "@/models/Chapter";
import Lecture from "@/models/Lecture";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_CONNECTION || "");

  try {
    console.log("tesssst");
    const chapter = await Chapter.create({
      title: req.body.name || "Awesome Chapter!",
      courseId: req.body.courseId,
      published: true,
      content: "This is the best",
      tags: ["featured", "announcement"],
      pic: "123",
    });

    const course = await Course.findOne({ _id: req.body.courseId });
    course.chapters.push(chapter);
    course.save();

    //course.save();
    res.status(200).json({});
  } catch (e) {
    res.status(500).json({});
  }
}
