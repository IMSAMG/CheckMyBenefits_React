import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ApplicationCard from "./ApplicationCard";
import Expect from "./Expect";
import Status from "./Status";

const FoodProgress = () => {
  return (
    <Box sx={{ pl: { xs: "none", sm: "240px" }, mx: 4 }}>
      <Search
        sx={{
          display: { xs: "flex", sm: "flex", md: "none" },
          justifyContent: "flex-end",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon sx={{ zIndex: 1, color: "#c8c7c9" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            size="large"
            sx={{
              color: "secondary.main",
              textTransform: "none",
              fontWeight: 600,
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Programs and Initiatives
          </Button>
          <Button
            size="large"
            sx={{
              color: "secondary.main",
              textTransform: "none",
              fontWeight: 600,
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Updates
          </Button>
          <Button
            size="large"
            sx={{
              color: "secondary.main",
              textTransform: "none",
              fontWeight: 600,
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Contact us
          </Button>
        </Box>
        <Search sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <SearchIconWrapper>
            <SearchIcon sx={{ zIndex: 1, color: "#c8c7c9" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>

      <Box>
        <ApplicationCard
          appStatus="warning"
          headerLabel="TIME SENSITIVE: We need more information"
          subText="Our office sent a request on April 30th, 2022 for more information to the address listed on the application: 3903 Main Street... Please call 1-800-949-1341 to set up an appointment."
          clickable={false}
        />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Food Assistance
        </Typography>
        <Typography variant="body1">
          Your application has been received and is currently #status. Typically
          it takes XXX to get approval after submission. Please call
          XXX-XXX-XXXX or email info@wa.gov if you have any questions.
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "flex" },
          gap: 8,
          my: 3,
        }}
      >
        <Expect />
        <Status />
      </Box>
    </Box>
  );
};

export default FoodProgress;

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
