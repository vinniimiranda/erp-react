import React from "react";

import {
  Drawer,
  Box,
  TextField,
  Typography,
  Grid,
  Button
} from "@material-ui/core";

function MaterialForm({ open = false, toggleDrawer = () => {}, material }) {
  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer()}>
        <Box
          display="flex"
          width="60vw"
          flexDirection="column"
          padding="2rem"
          height="100%"
        >
          <Box display="flex">
            <Typography>
              {material?.id ? "EDITAR MATERIAL" : "CRIAR NOVO MATERIAL"}
            </Typography>
          </Box>
          <Box display="flex" marginTop="1rem">
            <Grid container spacing={3}>
              <Grid item md="6">
                <TextField
                  value={material.name}
                  variant="filled"
                  label="Material"
                  style={{
                    width: "100%"
                  }}
                ></TextField>
              </Grid>
              <Grid item md="6">
                <TextField
                  value={material.slug}
                  variant="filled"
                  label="Código"
                  style={{
                    width: "100%"
                  }}
                ></TextField>
              </Grid>
              <Grid item md="12">
                <TextField
                  value={material.description}
                  variant="filled"
                  label="Descrição"
                  style={{
                    width: "100%"
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
                  color: "#fff"
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

export default MaterialForm;
