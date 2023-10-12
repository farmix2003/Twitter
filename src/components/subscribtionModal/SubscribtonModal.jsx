import { Close, FiberManualRecord } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};
const features = [
  "Prioritized rankigns in conversations and search",
  "See approximately twice as many tweets between ads in your For You and Following timelines",
  "Add bold and italic text in your Tweets",
  "Post longer Videos and 1080p video uploads",
  "All the existing blue features, including editing Tweets, Bookmark Folders and early access to new features",
];
export default function SubscribtionModal({ open, handleClose }) {
  const [plan, setPlan] = useState("Anually");
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <Close />
            </IconButton>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg">
                <h1 className="text-xl pr-5">
                  Blue subscribers with a verified phone number will get a blue
                  checkmark once approved
                </h1>
                <img
                  src="https://www.freepngimg.com/thumb/twitter/108254-badge-twitter-verified-free-clipart-hd.png"
                  className="w-24 h-24"
                />
              </div>
              <div className="flex justify-between rounded-full border px-5 py-3 border-gray-700">
                <div>
                  <span
                    onClick={() => setPlan("Anually")}
                    className={`${
                      plan === "Anually" ? "text-black" : "text-gray-500"
                    } cursor-pointer`}
                  >
                    Anually
                  </span>
                  <span className="text-green-600 text-sm ml-2">SAVE 12%</span>
                </div>
                <p
                  onClick={() => setPlan("monthly")}
                  className={`${
                    plan === "monthly" ? "text-black" : "text-gray-500"
                  } cursor-pointer`}
                >
                  Monthly
                </p>
              </div>
              <div className="space-y-3">
                {features.map((item) => (
                  <div className="flex items-center space-x-5">
                    <FiberManualRecord sx={{ width: "7px", height: "7px" }} />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              <div className="cursor-pointer flex justify-between bg-gray-900 text-white rounded-full px-5 py-3">
                <span className="line-throguh italic">$10.50</span>
                <span className="px-5">$70.00/year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
