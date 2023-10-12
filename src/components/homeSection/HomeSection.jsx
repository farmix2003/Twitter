import { EmojiEmotions, Image, LocationOn } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import TweetCart from "./TweetCart";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});
const HomeSection = () => {
  const [loadingImg, setLoadingImg] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const handleSubmit = (values) => {
    console.log("values: ", values);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      img: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  const handleSelectImage = (event) => {
    setLoadingImg(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setLoadingImg(false);
    setSelectedImg(imgUrl);
  };
  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-x1 font-bold opacity-90">Home</h1>
      </section>
      <section className="pb-5">
        <div className="flex space-x-5">
          <Avatar
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
            alt="username"
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening"
                  className="border-none outline-none text-lg bg-transparent"
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              {/* <div className="">
                  <img src="" alt="" />
                </div> */}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <Image className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imgFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <LocationOn className="text-[#1d9bf0]" />
                  <EmojiEmotions className="text-[#1d9bf0]" />
                </div>
                <div>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                      py: "8px",
                      px: "20px",
                      bgcolor: "#1e88e5",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        {[1, 1, 1, 1].map((item) => (
          <TweetCart />
        ))}
      </section>
    </div>
  );
};

export default HomeSection;
