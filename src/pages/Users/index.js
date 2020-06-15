import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";

import UserTable from "./Table";
import UserForm from "./Form";
import { Add } from "@material-ui/icons";

export default function Users() {
  const data = [];

  for (let i = 1; i <= 25; i++) {
    data.push({
      id: i,
      username: "vinniimiranda",
      full_name: "Flavio Vinicius Miranda",
      document: "415.576.838-08",
      birth_date: "1994-02-13",
      email: "vinniimiranda@gmail.com",
    });
  }
  const [openForm, setOpenForm] = useState(false);
  const [user, setUser] = useState({});

  function toggleDrawer() {
    setOpenForm(!openForm);
  }

  function handleAddUser() {
    setUser({});
    toggleDrawer();
  }

  function handleEditUser({ row }) {
    setUser(row);
    toggleDrawer();
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        padding: ".3rem 2rem ",
      }}
    >
      <Box display="flex" justifyContent="center">
        <h2>USUÁRIOS</h2>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        margin="1rem 0"
      >
        <Button
          color="primary"
          variant="contained"
          style={{
            color: "#fff",
          }}
          startIcon={<Add />}
          onClick={handleAddUser}
        >
          USUÁRIO
        </Button>
      </Box>
      <UserTable data={data} handleEditUser={handleEditUser} />
      <UserForm open={openForm} toggleDrawer={toggleDrawer} user={user} />
    </Box>
  );
}
