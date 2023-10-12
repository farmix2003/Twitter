import { KeyboardBackspace } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import TweetCart from "../homeSection/TweetCart";
import { Divider } from "@mui/material";

const TweetDetails = () => {
  const navigation = useNavigate();
  const hadleBackHome = () => navigation(-1);
  return (
    <React.Fragment>
      <section className="z-50 flex items-center sticky top-0 bg-opacity-95 bg-white">
        <KeyboardBackspace className="cursor-pointer" onClick={hadleBackHome} />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Tweets</h1>
      </section>
      <section>
        <TweetCart />
        <Divider sx={{ margin: "2rem 0rem" }} />
      </section>
      <section>
        {[1, 1, 1].map((item) => (
          <TweetCart />
        ))}
      </section>
    </React.Fragment>
  );
};

export default TweetDetails;
