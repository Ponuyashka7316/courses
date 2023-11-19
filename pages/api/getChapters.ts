import type { NextApiRequest, NextApiResponse } from "next";
import mongoose, { Schema, SchemaTypes, model } from "mongoose";
import Course from "@/models/Course";
import Chapter from "@/models/Chapter";
import Lecture from "@/models/Lecture";

type Data = {
  data: any[];
  length: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_CONNECTION || "");
  const chaptersList = await Chapter.find({ courseId: req.query.id });
  console.log("req.query123,", chaptersList);

  res.status(200).json({ data: chaptersList, length: chaptersList.length });
}
