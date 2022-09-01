import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeroButton } from "../styledComponents/HeroButton";
import LoginForm from "./LoginForm";

const HeroButtons = () => {
  const [openLoginForm, setOpenLoginForm] = useState(false);

  return (
    <>
      {openLoginForm && (
        <LoginForm open={openLoginForm} setOpen={setOpenLoginForm} />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <HeroButton
          variant="contained"
          color="primary"
          component={Link}
          to="/check-eligibility"
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          Am I Eligible?
        </HeroButton>

        <HeroButton
          variant="contained"
          color="secondary"
          size="large"
          sx={{ fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" } }}
          onClick={() => setOpenLoginForm(true)}
        >
          Create An Account
        </HeroButton>
        <HeroButton
          variant="contained"
          color="secondary"
          size="large"
          sx={{ fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" } }}
          onClick={() => setOpenLoginForm(true)}
        >
          Check My Benefits
        </HeroButton>
        <HeroButton
          variant="contained"
          color="secondary"
          size="large"
          sx={{ fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" } }}
          onClick={() => setOpenLoginForm(true)}
        >
          Apply For Benefits
        </HeroButton>
      </Box>
    </>
  );
};

export default HeroButtons;
