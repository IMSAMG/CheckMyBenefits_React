import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import backgroundEllipse from "../assets/images/ellipse.svg";
import { clearEligibilityFormData } from "../slices/memberEligibilityFormSlice";
import { HeroButton } from "../styledComponents/HeroButton";

const HeroSection = () => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        my: 4,
        pt: 20,
        pb: 10,
        display: { md: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage: `url(${backgroundEllipse})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "40% 40%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          mx: 4,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            position: "absolute",
            left: "2rem",
            top: "5rem",
            letterSpacing: "0.1rem",
            width: "50%",
            fontWeight: 600,
            fontSize: {
              xs: "1.25rem",
              sm: "1.25rem",
              md: "2.125rem",
            },
          }}
        >
          Get Access to Washington Integrated Eligibility System
        </Typography>
        <HeroButton
          variant="contained"
          color="primary"
          component={Link}
          to="/check-eligibility"
          sx={{
            position: "absolute",
            top: "5rem",
            right: "4rem",
            padding: "12px 34px",
            fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
            display: { xs: "none", sm: "none", md: "block" },
          }}
          onClick={() => dispatch(clearEligibilityFormData())}
        >
          Am I Eligible?
        </HeroButton>
      </Box>
    </Box>
  );
};

export default HeroSection;
