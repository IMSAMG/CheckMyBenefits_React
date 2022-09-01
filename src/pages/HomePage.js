import { Box } from "@mui/material";
import HeroButtons from "../components/HeroButtons";
import HeroSection from "../components/HeroSection";
import MainCards from "../components/MainCards";

const HomePage = () => {
  return (
    <Box sx={{ minHeight: "80vh" }}>
      <HeroSection />
      <HeroButtons />
      <MainCards />
    </Box>
  );
};

export default HomePage;
