import { style } from "@/pages/courses/courses";
import GetLectures, { CreateLecture } from "@/services/lecturesService";
import Form, { Field } from "@/utils/form";
import { Box, Modal } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import * as yup from "yup";
import Link from "next/link";

const validationSchema = yup.object({
  name: yup
    .string("Enter course name")
    .min(1, "Enter a valid name")
    .required("name is required"),
  description: yup
    .string("Enter your description")
    .required("description is required"),
});

const initialValues = {
  name: "foobar@example.com",
  description: "foobar",
};

const fields = [
  { label: "name", value: "name", type: "text" },
  { label: "description", value: "description", type: "text" },
] as Field[];

//todo: get list of lects from req, create one lec related to chapter
const Lectures = () => {
  const [lectures, setLectures] = useState<any>();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  useEffect(() => {
    const response = getLecturesReq();
  }, [router.query]);

  const onSumbit = async (values: any) => {
    console.log(",", router.query);
    const res = await CreateLecture({
      name: values.name,
      description: values.description,
      chapterId: router.query.chapterId as string,
    });
    if (res.status === 200) {
      await getLecturesReq();
    }
  };

  const getLecturesReq = async () => {
    if (router.query.chapterId) {
      console.log("chapterId", router.query);
      const chapters = await GetLectures(router.query.chapterId as string);
      if (chapters.status === 200) {
        setLectures(chapters.data.data);
      }
    }
  };

  return (
    <div>
      {lectures
        ? lectures.map((lecture: any) => {
            return (
              <div key={lecture._id}>
                <Link
                  href={`http://localhost:3000/courses/${router.query.courseId}/chapter/${router.query.chapterId}/lecture/${lecture._id}`}
                >
                  {lecture.title}{" "}
                </Link>
              </div>
            );
          })
        : null}{" "}
      <AddBoxOutlinedIcon
        sx={{ fontSize: 50, color: "#4CAF50", cursor: "pointer" }}
        onClick={handleOpenModal}
      />
      <Modal open={isOpen} onClose={handleClose}>
        <Box sx={style}>
          <Form
            fields={fields}
            onSubmit={onSumbit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Lectures;
