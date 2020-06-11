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
import LOGO from "../../assets/images/orange-logo.png";
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
    {
      text: "Dashboard",
      icon: <Dashboard color="primary" />,
      path: "/dashboard",
    },
    {
      text: "Clientes",
      icon: <AccountCircle color="primary" />,
      path: "/customers",
    },
    {
      text: "Fornecedores",
      icon: <Business color="primary" />,
      path: "/suppliers",
    },
    {
      text: "Materiais",
      icon: <Storage color="primary" />,
      path: "/materials",
    },
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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="2rem"
      >
        <img
          style={{
            width: "60%",
          }}
          alt="Logo"
          src={LOGO}
        />
      </Box>
      <List>
        {listItems.map((item, index) => (
          <ListItem
            selected={history.location.pathname === item.path}
            onClick={() => history.push(item.path)}
            button
            style={{ padding: ".75rem" }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
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
        <Menu color="primary" />
      </IconButton>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
    </Box>
  );
}
