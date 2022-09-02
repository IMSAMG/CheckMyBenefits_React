import { Typography, Divider, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";

import ApplicationCard from "./ApplicationCard";
import { useNavigate } from "react-router-dom";

const TopSection = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#f1e2db",
            mt: 2,
            boxShadow: "none",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{
                width: "30px",
                height: "30px",
                backgroundColor: "#f7ccbe",
                borderRadius: "50%",
              }}
            >
              &nbsp;
            </Box>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Follow up appointement due.
              </Typography>
              <Typography
                variant="subtitle"
                sx={{ fontWeight: 600, fontSize: "0.8rem" }}
              >
                Schedule by 3/23/2022
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{
                width: "30px",
                height: "30px",
                backgroundColor: "#f7ccbe",
                borderRadius: "50%",
              }}
            >
              &nbsp;
            </Box>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Reapply for cash.
              </Typography>
              <Typography
                variant="subtitle"
                sx={{ fontWeight: 600, fontSize: "0.8rem" }}
              >
                Due by 10/31/2022
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
      <Box>
        <Box component="section">
          <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "none" },
              gap: 2,
              justifyContent: "flex-end",
              // alignItems: "center",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ zIndex: 1, color: "#c8c7c9" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box
              onClick={handleMenu}
              sx={{
                backgroundColor: "#ffeee9",
                px: 1.4,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <NotificationAddIcon sx={{ color: "#f8842b" }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h4"
              variant="h4"
              display="inline"
              sx={{ mb: 2 }}
            >
              Hello, #Applicant
            </Typography>
            <Box
              sx={{ display: { xs: "none", sm: "none", md: "flex" }, gap: 2 }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ zIndex: 1, color: "#c8c7c9" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box
                onClick={handleMenu}
                sx={{
                  backgroundColor: "#ffeee9",
                  px: 1.4,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <NotificationAddIcon sx={{ color: "#f8842b" }} />
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1">
              The application #3490324 for food assistance has been sent to our
              office. The entire process takes about 4-7 weeks depending on the
              volume of applications, additional questions, and the complication
              of the application. Here's a rough outline of the approval
              process.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            All Applications:
          </Typography>
          <Divider />
          <Box>
            <ApplicationCard
              appStatus="warning"
              headerLabel="Food: PENDING INTERVIEW"
              subText="This is a succint, helpful message about an action needed to move forward in the application."
              clickable={true}
              onClickHandler={() => navigate("food-progress")}
            />
            <ApplicationCard
              appStatus="error"
              headerLabel="Medicaid: DENIED"
              subText="This is a succint, helpful message explaining why this application was denied and what can be done about it. Give contact information and maybe a link to more information."
              clickable={true}
            />
            <ApplicationCard
              appStatus="success"
              headerLabel="Food: Active"
              subText="This is a succint, helpful message about how much $ you have and when you need to reapply."
              clickable={true}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopSection;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  //   backgroundColor: "#f3f3f4",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    backgroundColor: "#f3f3f4",
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
