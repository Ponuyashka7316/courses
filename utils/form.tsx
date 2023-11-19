import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

interface FormProps {
  onSubmit: any;
  initialValues: any;
  validationSchema: any;
  fields: Array<Field>;
}

export type FieldType = "text" | "number";

export interface Field {
  label: string;
  type: FieldType;
  value: string;
}

const Form = ({
  fields,
  onSubmit,
  initialValues,
  validationSchema,
}: FormProps) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        {fields.map((field, index) => {
          return (
            <Box
              key={index}
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                fullWidth
                id={field.value}
                name={field.value}
                label={field.label}
                value={formik.values[field.value]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched[field.value] &&
                  Boolean(formik.errors[field.value])
                }
                helperText={
                  formik.touched[field.value] && formik.errors[field.value]
                }
              />
            </Box>
          );
        })}

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
