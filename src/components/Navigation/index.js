import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import {
  Menu,
  AccountCircle,
  Dashboard,
  Business,
  Storage,
} from "@material-ui/icons";

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
    { text: "Dashboard", icon: <Dashboard /> },
    { text: "Clientes", icon: <AccountCircle /> },
    { text: "Fornecedores", icon: <Business /> },
    { text: "Estoque", icon: <Storage /> },
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
          <ListItem button key={item.text} style={{ padding: ".75rem" }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer("left", true)}
        style={{
          marginBottom: "1rem",
        }}
      >
        <Menu />
      </Button>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
    </div>
  );
}
