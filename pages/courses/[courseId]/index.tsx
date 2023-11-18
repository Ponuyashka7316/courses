import GetChapters from "@/services/chaptersService";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useFormik } from "formik";
import { CreateChapter, CreateCourse } from "@/services/coursesService";
import * as yup from "yup";
import { Box, Button, Modal, TextField } from "@mui/material";
import { style } from "../courses";
import Form from "@/utils/form";

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

const Chapter = () => {
  const params = useParams();
  const router = useRouter();
  const [chapters, setChapters] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const onSumbit = async (values: any) => {
    const res = await CreateChapter({
      name: values.name,
      description: values.description,
      courseId: router.query.courseId as string,
    });
    if (res.status === 200) {
      await getChaptersReq();
    }
  };

  useEffect(() => {
    const response = getChaptersReq();
  }, [router.query]);

  const getChaptersReq = async () => {
    if (router.query.courseId) {
      const chapters = await GetChapters(router.query.courseId as string);
      if (chapters.status === 200) {
        setChapters(chapters.data.data);
      }
    }
  };

  return (
    <div>
      <div>
        {chapters
          ? chapters.map((chapter: any) => {
              return (
                <div key={chapter._id}>
                  <Link
                    href={`http://localhost:3000/courses/${router.query.courseId}/chapter/${chapter._id}`}
                  >
                    {chapter.title}{" "}
                  </Link>
                </div>
              );
            })
          : null}
        <AddBoxOutlinedIcon
          sx={{ fontSize: 50, color: "#4CAF50", cursor: "pointer" }}
          onClick={handleOpenModal}
        />
      </div>
      <Modal open={isOpen} onClose={handleClose}>
        <Box sx={style}>
          <Form
            onSubmit={onSumbit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Chapter;
