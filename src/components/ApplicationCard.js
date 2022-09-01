import { Card, CardContent, Typography, Box } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import React from "react";

const returnBgColor = (appStatus) => {
  if (appStatus === "warning") {
    return "#f9f3d5";
  } else if (appStatus === "error") {
    return "#f1e2db";
  }
  return "#edf3ed";
};

const returnBorderColor = (appStatus) => {
  if (appStatus === "warning") {
    return "#f0bd57";
  } else if (appStatus === "error") {
    return "#b84620";
  }
  return "#49ad36";
};

const ApplicationCard = ({
  appStatus,
  headerLabel,
  subText,
  clickable,
  onClickHandler,
}) => {
  return (
    <Card
      onClick={onClickHandler}
      sx={{
        my: 3,
        backgroundColor: () => returnBgColor(appStatus),
        borderLeft: `10px solid`,
        borderColor: () => returnBorderColor(appStatus),
        cursor: clickable ? "pointer" : "default",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box>
            {appStatus === "warning" && (
              <ErrorIcon sx={{ fontSize: "2.5rem" }} />
            )}
            {appStatus === "error" && (
              <WarningIcon sx={{ fontSize: "2.5rem" }} />
            )}
            {appStatus === "success" && (
              <CheckCircleRoundedIcon sx={{ fontSize: "2.5rem" }} />
            )}
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {headerLabel}
            </Typography>
            <Typography variant="body1">{subText}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

ApplicationCard.defaultProps = {
  onClickHandler: null,
};

export default ApplicationCard;
