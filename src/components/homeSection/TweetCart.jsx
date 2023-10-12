import {
  BarChart,
  ChatBubbleOutline,
  Favorite,
  FavoriteOutlined,
  FileUpload,
  MoreHoriz,
  Repeat,
} from "@mui/icons-material";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ReplyModal from "./ReplyModal";

const TweetCart = ({ tweets, loading }) => {
  const navigate = useNavigate();
  const [openRplyModal, setOpenReplyModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleReplyModel = () => setOpenReplyModal(true);
  const handleCloseRplyModal = () => setOpenReplyModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteTweet = () => {
    handleClose();
  };
  const handleEditTweet = () => {
    handleClose();
  };
  const handleCreateReTweet = () => {
    console.log("Retweet");
  };
  const handleLikeReTweet = () => {
    console.log("Likee");
  };
  return (
    <React.Fragment>
      {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
       <Repeat />
        <p>You Retweet</p>
    </div> */}
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
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ padding: "0px" }}
              >
                <MoreHoriz sx={{ fontSize: "26px" }} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleEditTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div
              className="cursor-pointer"
              onClick={() => navigate(`/tweetDetail/${3}`)}
            >
              <p className="mb-2 p-0">Tweeter clone - very good project</p>
              <img
                src="https://media.istockphoto.com/id/1383510053/tr/foto%C4%9Fraf/twitter-3d-logo-3d-render-image-illustration.jpg?s=612x612&w=0&k=20&c=H-eO922PRlzN9vSsPC7x4-1jcI5yGg4F0gGgEdAski8="
                alt="logo"
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 text-gray-600 flex items-center">
                <ChatBubbleOutline
                  className="cursor-pointer"
                  onClick={handleReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <Repeat
                  className="cursor-pointer"
                  onClick={handleCreateReTweet}
                />
                <p>54</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <Favorite
                    className="cursor-pointer"
                    onClick={handleLikeReTweet}
                  />
                ) : (
                  <FavoriteOutlined
                    className="cursor-pointer"
                    onClick={handleLikeReTweet}
                  />
                )}
                <p>54</p>
              </div>
              <div className="space-x-3 text-gray-600 flex items-center">
                <BarChart
                  className="cursor-pointer"
                  onClick={handleReplyModel}
                />
                <p>430</p>
              </div>
              <div className="space-x-3 text-gray-600 flex items-center">
                <FileUpload
                  className="cursor-pointer"
                  onClick={handleReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal open={openRplyModal} handleClose={handleCloseRplyModal} />
      </section>
    </React.Fragment>
  );
};

export default TweetCart;
