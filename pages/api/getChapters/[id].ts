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
  await mongoose.connect(process.env.MONGO_CONNECTION || "");
  console.log("112321341", req.query);

  const chaptersList = await Chapter.find({ _id: req.query.id });
  //const chaptersList = await Chapter.find({});

  res.status(200).json({ data: chaptersList, length: chaptersList.length });
}
