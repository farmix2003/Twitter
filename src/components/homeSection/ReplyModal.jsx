import { EmojiEmotions, Image, LocationOn } from "@mui/icons-material";
import { Avatar, Box, Button, Modal } from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function ReplyModal({ open, handleClose }) {
  const navigate = useNavigate();
  const [loadingImg, setLoadingImg] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState("");

  const handleSelectImage = (event) => {
    setLoadingImg(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setLoadingImg(false);
    setSelectedImg(imgUrl);
  };
  const handleSubmit = (values) => {
    console.log("Values: ", values);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: 4,
    },
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5">
            <Avatar
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
              alt="username"
              className="cursor-pointer"
              onClick={() => navigate(`/profile/${6}`)}
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center cursor-pointer space-x-2">
                  <span className="font-semibold">Farrukh Tugonov</span>
                  <span className="text-gray-600">@farrukhtugonov . 2m</span>
                  <img
                    src="https://www.freepngimg.com/thumb/twitter/108254-badge-twitter-verified-free-clipart-hd.png"
                    className="ml-2 w-6 h-5"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/tweetDetail/${3}`)}
                >
                  <p className="mb-2 p-0">Tweeter clone - very good project</p>
                </div>
              </div>
            </div>
          </div>
          <section className="pb-5 mt-[4rem]">
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
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
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
        </Box>
      </Modal>
    </div>
  );
}
