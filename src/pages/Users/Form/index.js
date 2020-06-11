import React from "react";

import { Drawer, Box, TextField, Grid, Button } from "@material-ui/core";
import { useResponsive } from "../../../hooks/useResponsive";

function UserForm({ open = false, toggleDrawer = () => {}, user }) {
  const responsive = useResponsive(425);
  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer()}>
        <Box
          display="flex"
          width={responsive ? "85vw" : "60vw"}
          flexDirection="column"
          padding="2rem"
          height="100%"
        >
          <Box display="flex">
            <h2>{user?.id ? "EDITAR USUÁRIO" : "CADASTRAR USUÁRIO"}</h2>
          </Box>
          <Box display="flex" marginTop="1rem">
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  value={user.username}
                  variant="filled"
                  label="Usuário"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  value={user.email}
                  variant="filled"
                  label="E-mail"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
            </Grid>
          </Box>
          <Box marginTop="1rem" display="flex" flex="1" alignSelf="flex-end">
            <Box display="flex" alignSelf="flex-end">
              <Button
                variant="contained"
                color="primary"
                style={{
                  color: "#fff",
                }}
                onClick={toggleDrawer}
              >
                Salvar
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

export default UserForm;
