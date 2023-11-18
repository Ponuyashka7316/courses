import axios from "axios";

interface LectureType {
  name: string;
  description: string;
  chapterId: string;
}

export default async function GetLectures(chapterId: string) {
  return await axios({
    method: "POST",
    url: `http://localhost:3000/api/getLectures/?id=${chapterId}`,
  });
}

export async function CreateLecture(data: LectureType) {
  return await axios({
    method: "POST",
    url: "http://localhost:3000/api/createLecture",
    data: data,
  });
}
