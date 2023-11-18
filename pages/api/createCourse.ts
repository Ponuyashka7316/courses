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
  await mongoose.connect(process.env.MONGO_CONNECTION || "");

  try {
    console.log("tesssst");
    await Course.create({
      title: req.body.name || "Awesome Course!",
      published: true,
      content: "This is the best",
      tags: ["featured", "announcement"],
      pic: "123",
      picture:
        "data:image/webp;base64,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",
    });

    //course.save();
    res.status(200).json({});
  } catch (e) {
    res.status(500).json({});
  }
}
