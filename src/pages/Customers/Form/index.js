import React from "react";

import { Drawer, Box, TextField, Grid, Button } from "@material-ui/core";
import { useResponsive } from "../../../hooks/useResponsive";

function CustomerForm({ open = false, toggleDrawer = () => {}, customer }) {
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
            <h2>{customer?.id ? "EDITAR CLIENTE" : "CADASTRAR CLIENTE"}</h2>
          </Box>
          <Box display="flex" marginTop="1rem">
            <Grid container spacing={3}>
              <Grid item md="3" xs="12">
                <TextField
                  value={customer.document}
                  variant="filled"
                  label="CNPJ"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md="5" xs="12">
                <TextField
                  value={customer.slug}
                  variant="filled"
                  label="Razão Social"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md="4" xs="12">
                <TextField
                  value={customer.social_name}
                  variant="filled"
                  label="Nome Fantasia"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md="3" xs="12">
                <TextField
                  value={customer.address?.cep}
                  variant="filled"
                  label="CEP"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md="6" xs="12">
                <TextField
                  value={customer.address?.street}
                  variant="filled"
                  label="Rua"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md="3" xs="12">
                <TextField
                  value={customer.address?.number}
                  variant="filled"
                  label="Número"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md="6" xs="12">
                <TextField
                  value={customer.address?.neighborhood}
                  variant="filled"
                  label="Bairro"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md="4" xs="12">
                <TextField
                  value={customer.address?.city}
                  variant="filled"
                  label="Cidade"
                  style={{
                    width: "100%",
                  }}
                ></TextField>
              </Grid>
              <Grid item md="2" xs="12">
                <TextField
                  value={customer.address?.state}
                  variant="filled"
                  label="Estado"
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

export default CustomerForm;
