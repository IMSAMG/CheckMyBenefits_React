import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HouseIcon from "@mui/icons-material/House";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/AppBar";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { logOutUser } from "../slices/LoginStateSlice";
import { useDispatch } from "react-redux";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const dispatch = useDispatch();

  const drawer = (
    <>
      <Box
        sx={{
          ".&MuiToolbar-root": { height: "100px", minHeight: "100px" },
        }}
      >
        <Toolbar disableGutters />
      </Box>

      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ px: 2, pb: 5, mt: 10 }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Washington Cash, Food and Medical Assistance
          </Typography>
        </Box>
        <List
          sx={{
            a: {
              color: "inherit",
            },
            ".active": {
              backgroundColor: "#fff",
              ".MuiListItemIcon-root": { color: "text.primary" },
              ".MuiListItemText-root": { color: "text.primary" },
            },
            ".MuiListItemIcon-root": { color: "primary.contrastText" },
          }}
        >
          {[
            { label: "Overview", routePath: "overview" },
            { label: "Food", routePath: "food" },
            { label: "Cash", routePath: "cash" },
            { label: "Medicaid", routePath: "medicaid" },
            { label: "Housing", routePath: "housing" },
            { label: "Contact Us", routePath: "contact-us" },
            { label: "Account", routePath: "account" },
            { label: "Logout", routePath: "/" },
          ].map((text, index) => (
            <ListItem
              key={text.label}
              sx={{
                ".active  .MuiListItemIcon-root": { color: "text.primary" },
                py: 2,
              }}
              component={NavLink}
              to={text.routePath}
              onClick={() => {
                dispatch(logOutUser());
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {text.label === "Overview" && <WindowOutlinedIcon />}
                  {text.label === "Food" && <RestaurantOutlinedIcon />}
                  {text.label === "Medicaid" && <LocalHospitalIcon />}
                  {text.label === "Cash" && <AttachMoneyIcon />}
                  {text.label === "Housing" && <HouseIcon />}
                  {text.label === "Contact Us" && <ContactMailIcon />}
                  {text.label === "Account" && <ManageAccountsIcon />}
                  {text.label === "Logout" && <LogoutIcon />}
                </ListItemIcon>
                <ListItemText
                  sx={{ "& .MuiTypography-root": { fontSize: "1.3rem" } }}
                  primary={text.label}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ResponsiveAppBar handleDrawerToggle={handleDrawerToggle} />
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              border: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              border: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
      <Outlet />
    </>
  );
}
