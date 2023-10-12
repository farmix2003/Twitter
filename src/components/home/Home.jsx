import { Grid } from "@mui/material";
import {
  HomeSection,
  Navigation,
  Profile,
  RightPart,
  TweetDetails,
} from "../../components";
import { Route, Routes } from "react-router-dom";
const Home = () => {
  return (
    <Grid container xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hidden lg:block relative w-full">
        <Navigation />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        className="px-5 lg:px-9 hidden lg:block relative w-full"
      >
        <Routes>
          <Route path="/home" element={<HomeSection />} />
          <Route path="/" element={<HomeSection />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/tweetDetail/:id" element={<TweetDetails />} />
        </Routes>
      </Grid>
      <Grid item xs={0} lg={3} className="hidden lg:block relative w-full">
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default Home;
