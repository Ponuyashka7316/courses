import axios from "axios";

export async function GetCourses() {
  return await axios({
    method: "POST",
    url: "http://localhost:3000/api/getCourses",
  });
}

interface CourseType {
  name: string;
  description: string;
}
interface ChapterType {
  name: string;
  description: string;
  courseId: string;
}

export async function CreateCourse(data: CourseType) {
  return await axios({
    method: "POST",
    url: "http://localhost:3000/api/createCourse",
    data: data,
  });
}

export async function CreateChapter(data: ChapterType) {
  return await axios({
    method: "POST",
    url: "http://localhost:3000/api/createChapter",
    data: data,
  });
}
