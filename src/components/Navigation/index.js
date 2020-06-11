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
  People,
} from "@material-ui/icons";
import history from "../../services/history";
import { ReactComponent as Logo } from "../../assets/images/orange-logo.svg";
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

  const routeList = [
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
    {
      text: "Usuários",
      icon: <People color="primary" />,
      path: "/users",
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
        <Logo
          style={{
            width: "60%",
            height: "60%",
          }}
        />
      </Box>
      <List>
        {routeList.map((item, index) => (
          <ListItem
            key={item.text}
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
    <Box padding="1rem 0  0 2rem ">
      <IconButton onClick={toggleDrawer("left", true)}>
        <Menu color="primary" />
      </IconButton>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
    </Box>
  );
}
