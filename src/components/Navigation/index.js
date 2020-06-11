import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Link,
  Box,
} from "@material-ui/core";

import {
  Menu,
  AccountCircle,
  Dashboard,
  Business,
  Storage,
} from "@material-ui/icons";
import history from "../../services/history";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Navigation() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const listItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
    { text: "Clientes", icon: <AccountCircle />, path: "/customers" },
    { text: "Fornecedores", icon: <Business />, path: "/suppliers" },
    { text: "Materiais", icon: <Storage />, path: "/materials" },
  ];

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <img
        style={{
          width: "100%",
        }}
        alt="Logo"
        src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/technology-logo-maker-lp/online-logo-design-template-for-an-eco-tech-company-2176l-206-el-1024x1024.png"
      />
      <List>
        {listItems.map((item, index) => (
          <Link
            color={
              history.location.pathname === item.path ? "primary" : "inherit"
            }
            href={item.path}
            underline="none"
            key={item.text}
          >
            <ListItem
              selected={history.location.pathname === item.path}
              onClick={() => history.push(item.path)}
              button
              style={{ padding: ".75rem" }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box padding=" 1rem 2rem">
      <IconButton
        onClick={toggleDrawer("left", true)}
        style={{
          marginBottom: "1rem",
        }}
      >
        <Menu />
      </IconButton>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
    </Box>
  );
}
