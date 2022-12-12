import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Box, Toolbar } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import SideCardMenu from "./SideCardMenu";
import { NavLink, useLocation } from "react-router-dom";

import "../App.css";

const Sidebar = (props) => {
  const location = useLocation();

  return (
    <div>
      <Drawer variant="permanent">
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {SideCardMenu.map((item, index) => (
              <ListItem
                component={NavLink}
                to={item.link}
                button
                key={item.title}
                // selected={item.link === location.pathname}
              >
                <ListItemIcon
                  className="listItem"
                  style={{
                    background:
                      item.link === location.pathname ? "#5541D7" : "none",
                    borderRadius: "15px",
                    color: item.link === location.pathname ? "#fff" : "#bdbdbd",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
