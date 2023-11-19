import CustomCard from "@/components/Card/Cards";
import { CreateCourse, GetCourses } from "@/services/coursesService";
import { useEffect, useState } from "react";
import classes from "./courses.module.scss";
import { ErrorMessage, Formik, useFormik } from "formik";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import * as yup from "yup";
import Form, { Field, Field } from "@/utils/form";

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

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const fields = [
  { label: "name", value: "name", type: "text" },
  { label: "description", value: "description", type: "text" },
] as Field[];

const Courses = () => {
  const [courses, setCourses] = useState<any[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  useEffect(() => {
    const response = getCoursesReq();
  }, []);

  const onSumbit = async (values: any) => {
    const res = await CreateCourse({
      name: values.name,
      description: values.description,
    });
    if (res.status === 200) {
      await getCoursesReq();
    }
    console.log(JSON.stringify(values, null, 2));
  };

  const getCoursesReq = async () => {
    const coursesData = await GetCourses();
    setCourses(coursesData.data.data);
  };

  return courses ? (
    <>
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
      <div className={classes.ClassesRow}>
        {courses.map((course) => {
          return (
            <CustomCard course={course} pic={course.picture} key={course._id} />
          );
        })}
        <div className={classes.Plus}>
          <AddBoxOutlinedIcon
            sx={{ fontSize: 50, color: "#4CAF50", cursor: "pointer" }}
            onClick={handleOpenModal}
          />
        </div>
      </div>
    </>
  ) : (
    <>Loading...</>
  );
};

export default Courses;
