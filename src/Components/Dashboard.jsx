import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FaSync, FaBell, FaCog, FaChevronDown } from "react-icons/fa";

const drawerWidth = 240;

const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: "#eee",
  borderRadius: "4px",
  height,
  width: "100%",
}));

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <FontAwesomeIcon icon={faBlog} style={{ fontSize: 24, color: "white" }} />
          <button style={{
            backgroundColor: "white",
            color: "#1976d2",
            padding: "6px 16px",
            borderRadius: "9999px",
            fontWeight: "500",
          }}>
            + New
          </button>
        </div>

        <input
          type="search"
          placeholder="Search group and join..."
          style={{
            width: 400,
            padding: "6px 12px",
            borderRadius: 4,
            border: "1px solid #ccc",
            outline: "none"
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <IconButton color="inherit"><FaSync /></IconButton>

          <div style={{ position: "relative" }}>
            <IconButton color="inherit"><FaBell /></IconButton>
            <span style={{
              position: "absolute", top: 0, right: 0, backgroundColor: "red",
              color: "white", fontSize: 10, padding: "2px 6px", borderRadius: "9999px"
            }}>
              9+
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", cursor: "pointer", gap: 4 }}>
            <FaCog />
            <FaChevronDown />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

const SidebarItems = [
  { text: "profile", icon: <DashboardIcon /> },
  { text: "Groups", icon: <ShoppingCartIcon /> },
  { text: "Create Group", icon: <BarChartIcon /> },
];

export default function CombinedDashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {SidebarItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Skeleton height={200} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skeleton height={200} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skeleton height={200} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
