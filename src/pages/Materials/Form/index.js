import React from "react";

import { Drawer, Box, TextField, Grid, Button } from "@material-ui/core";
import { useResponsive } from "../../../hooks/useResponsive";
import { useSnackbar } from "notistack";

function MaterialForm({ open = false, toggleDrawer = () => {}, material }) {
  const responsive = useResponsive(425);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = () => {
    toggleDrawer();
    enqueueSnackbar("Material cadastrado com sucesso", {
      variant: "success",
      anchorOrigin: { horizontal: "right", vertical: "top" },
    });
  };
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
            <h2>{material?.id ? "EDITAR MATERIAL" : "CADASTRAR MATERIAL"}</h2>
          </Box>
          <Box display="flex" marginTop="1rem">
            <Grid container spacing={3}>
              <Grid item md="6" xs="12">
                <TextField
                  value={material.name}
                  variant="filled"
                  label="Material"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md="6" xs="12">
                <TextField
                  value={material.slug}
                  variant="filled"
                  label="Código"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md="12" xs="12">
                <TextField
                  value={material.description}
                  variant="filled"
                  label="Descrição"
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
                onClick={handleSubmit}
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
