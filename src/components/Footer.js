import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { TextButton } from "../styledComponents/TextButton";

const Footer = () => {
  return (
    <Box
      sx={{
        // position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "primary.light",
        color: "primary.contrastText",
        minHeight: "30vh",
        mt: "auto",
        pl: { xs: 1, sm: 2, md: "240px" },
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          pt: 3,
          gap: 2,
        }}
      >
        <Typography sx={{ fontWeight: 600, letterSpacing: "0.1rem", pb: 2 }}>
          Connect With DSHS
        </Typography>
        <TextButton>About Us</TextButton>
        <TextButton>Contact Us</TextButton>
        <TextButton>Locate a Service Office</TextButton>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          pt: 3,
          gap: 2,
        }}
      >
        <Typography sx={{ fontWeight: 600, letterSpacing: "0.1rem", pb: 2 }}>
          Language Access
        </Typography>
        <TextButton>Español </TextButton>
        <TextButton>English</TextButton>
      </Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          pt: 3,
          gap: 2,
        }}
      >
        <Typography sx={{ fontWeight: 600, letterSpacing: "0.1rem", pb: 2 }}>
          Social Media
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            mt: -1,
          }}
        >
          <IconButton size="large" sx={{ color: "primary.contrastText" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton size="large" sx={{ color: "primary.contrastText" }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton size="large" sx={{ color: "primary.contrastText" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton size="large" sx={{ color: "primary.contrastText" }}>
            <YouTubeIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
