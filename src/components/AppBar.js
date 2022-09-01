import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TranslateIcon from "@mui/icons-material/Translate";
import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import americanFlag from "../assets/images/americanFlag.png";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/images/logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import avatarImage from "../assets/images/avatar.jpg";
import { useSelector } from "react-redux";

const languages = [
  "Español",
  "English",
  "简体",
  "Tiếng Việt",
  "한국어",
  "Tagalog",
];
const ResponsiveAppBar = ({ handleDrawerToggle }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const userLoggedIn = useSelector((state) => state.loginState.userLoggedIn);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar
      position="fixed"
      variant="dense"
      sx={{
        backgroundColor: "primary.main",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          ".&MuiToolbar-root": { height: "100px", minHeight: "100px" },
          display: "block",
          mx: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 0.5,
          }}
        >
          <img
            src={Logo}
            alt="Website Logo"
            style={{ width: "200px", height: "50px" }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <LocalPhoneIcon sx={{ fontSize: "0.8rem" }} />
            <Typography
              variant="subtitle"
              sx={{ fontSize: { xs: "0.5rem", sm: "0.7rem" } }}
            >
              1(984)116-6699
            </Typography>
            {userLoggedIn && <Avatar alt="Remy Sharp" src={avatarImage} />}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 2,
              pt: { xs: 1, sm: 1, md: 2 },
            }}
          >
            {handleDrawerToggle && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <img
              src={americanFlag}
              alt="American Flag"
              style={{ width: "1.5rem", height: "1rem" }}
            />
            <Typography
              variant="subtitle"
              sx={{ fontSize: { xs: "0.5rem", sm: "0.7rem" } }}
            >
              An official website of the United States government.
            </Typography>
            <Typography
              variant="subtitle"
              sx={{
                fontSize: { xs: "0.5rem", sm: "0.7rem" },
                cursor: "pointer",
                textDecoration: "underline",
                textAlign: "center",
              }}
            >
              Here's how you know?
              <KeyboardArrowDownIcon sx={{ fontSize: "0.7rem" }} />
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 2,
              pt: { xs: 1, sm: 1, md: 2 },
            }}
          >
            <Typography
              variant="subtitle"
              sx={{ fontSize: "0.7rem", cursor: "pointer" }}
            >
              Español
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ fontSize: "0.7rem", cursor: "pointer" }}
            >
              English
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ fontSize: "0.7rem", cursor: "pointer" }}
            >
              简体
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ fontSize: "0.7rem", cursor: "pointer" }}
            >
              Tiếng Việt
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ fontSize: "0.7rem", cursor: "pointer" }}
            >
              한국어
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ fontSize: "0.7rem", cursor: "pointer" }}
            >
              Tagalog
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="language selection options"
              aria-controls="menu-language"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <TranslateIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {languages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
export default ResponsiveAppBar;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  "& .MuiToolbar-root": {
    height: "100px",
    minHeight: "100px",
  },
}));
