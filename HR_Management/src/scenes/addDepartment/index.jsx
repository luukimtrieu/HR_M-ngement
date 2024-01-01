import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

const AddDepartment = () => {
    const [department, setDepartment] = useState()
    const navigate = useNavigate()

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const handleSubmit = (values) => {
        console.log(values.name)
        axios.post('http://localhost:3000/auth/add_department', values.name)
        .then(result => {
            if(result.data.Status) {
                navigate('/department')
                //navigate(0)
            } else {
              alert(result.data.Error)
            }
        })
        .catch(err => console.log(err));
    }

  return (
    <Box m="20px">
      <Header title="CREATE DEPARTMENT" subtitle="Add New Department" />

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"

            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Department Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
                
              />
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Department
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
  });

const initialValues = {
    name: ""
  };

export default AddDepartment