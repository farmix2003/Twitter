import {
  BusinessCenter,
  CalendarMonth,
  KeyboardBackspace,
  LocationOn,
} from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Avatar, Box, Button, Tab } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TweetCart, ProfileEdit } from "../../components";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();
  const [value, setValue] = useState("1");

  const handleOpenProfileEdit = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === "4") {
      console.log("likes");
    } else if (newValue === "1") {
      console.log("Tweets");
    }
  };
  const hadleBackHome = () => navigation(-1);

  const handleFollowUser = () => {
    console.log("Follow User");
  };
  return (
    <div>
      <section className="z-50 flex items-center sticky top-0 bg-opacity-95 bg-white">
        <KeyboardBackspace className="cursor-pointer" onClick={hadleBackHome} />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Farrukh Tugonov
        </h1>
      </section>
      <section>
        <img
          src="https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_640.jpg"
          className="w-[100%] h-[15rem] object-cover"
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-center mt-5 h-[5rem]">
          <Avatar
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
            alt="user-img"
            sx={{ width: "11rem", height: "11rem", top: "-1.5rem" }}
            className="transform -translate-y-10 p-0"
          />
          {true ? (
            <Button
              sx={{ borderRadius: "20px", top: "-1.5rem" }}
              variant="contained"
              onClick={handleOpenProfileEdit}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              sx={{ borderRadius: "20px" }}
              variant="contained"
              onClick={handleFollowUser}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Farrukh Tugonov</h1>
            {true && (
              <img
                src="https://www.freepngimg.com/thumb/twitter/108254-badge-twitter-verified-free-clipart-hd.png"
                alt="user-img"
                style={{ width: "18px", height: "15px", marginTop: "3px" }}
              />
            )}
          </div>
          <h1>tugonovfarrukh@gmail.com</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>
            Hello, I'm Farrukh Tugonov, Future Software Engineer and Full Stack
            Developer
          </p>
          <div className="py-1 flex space-x-5 items-center">
            <div className="flex items-center text-gray-500">
              <BusinessCenter />
              <p className="ml-2">Education</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOn />
              <p className="ml-2">Uzbekistan</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonth />
              <p className="ml-2">Joined August 2021</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center font-semibold space-x-1">
              <span>190</span>
              <span className="text-gray-500">Following</span>
            </div>
            <div className="flex items-center font-semibold space-x-1">
              <span>250</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="TWEETS" value="1" />
                <Tab label="REPLIES" value="2" />
                <Tab label="MEDIA" value="3" />
                <Tab label="LIKES" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1" className="w-full">
              {[1, 1, 1, 1].map((item) => (
                <TweetCart className="w-full" />
              ))}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Four</TabPanel>
          </TabContext>
        </Box>
      </section>
      <section>
        <ProfileEdit open={open} handleClose={handleClose} />
      </section>
    </div>
  );
};

export default Profile;
