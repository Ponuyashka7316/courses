import axios from "axios";

export default async function GetChapters(courseId: string) {
  return await axios({
    method: "POST",
    url: `http://localhost:3000/api/getChapters/?id=${courseId}`,
  });
}
