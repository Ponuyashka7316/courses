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
  // const course = Course.create({
  //   title: "Awesome Course!",
  //   published: true,
  //   content: "This is the best",
  //   tags: ["featured", "announcement"],
  // });

  const coursesList = await Course.find({});
  res.status(200).json({ data: coursesList, length: coursesList.length });
  //res.status(200).json({ data: [1] });
}
