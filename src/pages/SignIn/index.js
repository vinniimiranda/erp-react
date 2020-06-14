import React from "react";
import {
  Box,
  Grid,
  Button,
  Container,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Mail, Visibility } from "@material-ui/icons/";
import { ReactComponent as Logo } from "../../assets/images/orange-logo.svg";

function SignIn() {
  return (
    <Box
      display="flex"
      padding="2rem"
      justifyContent="center"
      alignItems="center"
      flex="1"
      height="100vh"
    >
      <Container maxWidth="xs">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="2rem"
        >
          <Logo
            style={{
              width: "50%",
              height: "60%",
            }}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="filled-email">E-mail</InputLabel>
              <FilledInput
                id="filled-email"
                type={"text"}
                placeholder="Digite seu e-mail"
                endAdornment={
                  <InputAdornment position="end">
                    <Mail color="primary" />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={"password"}
                placeholder="Digite sua senha"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <Visibility color="primary" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{
                color: "#fff",
                width: "100%",
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SignIn;
