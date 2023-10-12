import { Close } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 8,
};

const ProfileEdit = ({ open, handleClose }) => {
  const [uploading, setUploading] = useState(false);

  const handleSubmit = (values) => {
    console.log("Values: ", values);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: "",
    },
    onSubmit: handleSubmit,
  });
  const handleImageChange = (e) => {
    setUploading(true);
    const { name } = e.target;
    const file = e.target.files[0];
    formik.setFieldValue(name, file);
    setUploading(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose} aria-label="delete">
                  <Close />
                </IconButton>
                <p className=""> Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden h-[80vh]">
              <React.Fragment>
                <div className="w-full">
                  <div className="relative">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_640.jpg"
                      alt="bg-img"
                      className="w-full h-[12rem] oject-cover object-center"
                    />
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      name="backgroundImage"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                <div className="w-full transfrom -translate-y-20 ml-4 h-[6rem]">
                  <div className="relative">
                    <Avatar
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                      sx={{
                        width: "10rem",
                        height: "10rem",
                      }}
                      className="transform -translate-y-[0.3rem] p-0"
                    />
                    <input
                      type="file"
                      className="absolute bottom-5 left-0 w-[11rem] h-[11rem] opacity-0 cursor-pointer"
                      name="image"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </React.Fragment>
              <div className="space-y-3">
                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={
                    formik.values.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.values.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />
                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={
                    formik.values.website && Boolean(formik.errors.website)
                  }
                  helperText={formik.touched.website && formik.errors.website}
                />
                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={
                    formik.values.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.tolocation && formik.errors.location}
                />
                <div className="my-3">
                  <p className="text-lg">Date of Birht . Edit</p>
                  <p className="text-2xl">August 25, 2003</p>
                </div>
                <p className="py-3 text-lg">Edit Professional Profile</p>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileEdit;
