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
    console.log("first");
    const lecture = await Lecture.create({
      title: req.body.name || "Awesome Chapter!",
      chapterId: req.body.chapterId,
      published: true,
      content: "This is the best",
      tags: ["featured", "announcement"],
      pic: "123",
    });
    console.log("sec");

    const chapter = await Chapter.findOne({ _id: req.body.chapterId });
    console.log("231313", chapter);

    chapter.lectures.push(lecture);
    chapter.save();

    //course.save();
    res.status(200).json({});
  } catch (e) {
    res.status(500).json({});
  }
}
