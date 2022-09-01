import { Button, CardActions, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentFunnel } from "../../slices/memberEligibilityFormSlice";

const MainEligibilityContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentFunnel = useSelector(
    (state) => state.memberEligibilityForm.currentFunnel
  );
  const nextButtonClickHandler = () => {
    dispatch(setCurrentFunnel(currentFunnel + 1));
  };

  const handleBackButtonClickHandler = () => {
    if (currentFunnel > 0) {
      dispatch(setCurrentFunnel(currentFunnel - 1));
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Box>
        <Box sx={{ mt: 3 }}>
          <Typography gutterBottom variant="h6" component="div">
            Answer a few questions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We will ask you a few questions about the people in your household.
            If you don't know the exact answer, give us your best guess.
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography gutterBottom variant="h6" component="div">
            Instantly see your results
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Based on your answers, we will show what benefits your household
            might qualify for. However, the only way to verify benefit
            eligibility is to start an application.
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography gutterBottom variant="h6" component="div">
            How to apply
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You can choose to start an application immediately or you may choose
            to exit without applying.
          </Typography>
        </Box>
      </Box>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Button onClick={() => navigate("/")}>Exit Pre-Sceener</Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={handleBackButtonClickHandler}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={nextButtonClickHandler}
          >
            Start
          </Button>
        </Box>
      </CardActions>
    </>
  );
};

export default MainEligibilityContent;
