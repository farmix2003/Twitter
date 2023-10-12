import { Brightness4, MoreHoriz, Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import SubscribtionModal from "../subscribtionModal/SubscribtonModal";

const RightPart = () => {
  const [open, setOpen] = useState(false);
  const handleChangeMode = () => {
    console.log("Change Mode");
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full pl-12 text-gray-500 w-full"
        />

        <div className="absolute pl-3 top-0 left-0 pt-3 ">
          <Search className="text-gray-500" />
        </div>
        <Brightness4
          className="cursor-pointer ml-2"
          onClick={handleChangeMode}
        />
      </div>
      <section className="py-5">
        <h1 className="text-x1 font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new Features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
          onClick={handleOpen}
        >
          Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What is happening</h1>

        <div>
          <p className="text-sm">FIFA Women's World Cup</p>
          <p className="font-bold">Phillippines vs Switzerland</p>
        </div>
        {[1, 1, 1, 1].map((item) => (
          <div className="flex justify-between w-full">
            <div>
              <p>Entertainment - Trending</p>
              <p className="font-bold">#TheMarvels</p>
              <p>34.4k Tweets</p>
            </div>
            <MoreHoriz className="cursor-pointer" />
          </div>
        ))}
      </section>
      <section>
        <SubscribtionModal handleClose={handleClose} open={open} />
      </section>
    </div>
  );
};

export default RightPart;
