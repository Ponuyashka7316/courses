// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose, { Schema, SchemaTypes, model } from "mongoose";
import Course from "@/models/Course";
import Chapter from "@/models/Chapter";
import Lecture from "@/models/Lecture";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const chapter = new Chapter({
  //   title: "Awesome Chapter!",
  //   published: true,
  //   content: "This is the best chapter ever",
  //   tags: ["featured", "announcement"],
  // });

  // Insert the article in our MongoDB database
  //await chapter.save();

  //const chapterToFind = await Chapter.findOne({ title: "Awesome Course!" });

  // const lecture = Lecture.create({
  //   title: "Awesome Lecture!",
  //   published: true,
  //   content: "This is the best Lecture ever",
  //   tags: ["featured", "announcement"],
  // });

  // chapterToFind.lectures.push(await lecture);
  // chapterToFind.save();

  //console.log("auth ", chapterToFind, (await lecture)._id);
  res.status(200).json({ name: "John Doe" });
}
