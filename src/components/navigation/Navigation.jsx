import React from "react";
import { NavigationsMenu } from "./NavigationSMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";

const Navigation = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
  };
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            version="1.1"
            width={30}
            height={30}
          >
            {" "}
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 
            21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 
            17.52h1.833L7.084 4.126H5.117z"
            />{" "}
          </svg>
        </div>
        <div className="space-y-4">
          {NavigationsMenu.map((nav) => (
            <div
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() =>
                nav.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(nav.path)
              }
            >
              {nav.icon}
              <p>{nav.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 mb-10">
          <Avatar
            alt="username"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
          />
          <div>
            <span>Farrukh Tugonov</span>
            <br />
            <span className="opacity-70">ffarux386@gmail.com</span>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
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
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
