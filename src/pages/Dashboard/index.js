import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import Bar from "../../components/Charts/Bar";
import Pie from "../../components/Charts/Pie";

export default function Dashboard() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        padding: ".3rem 2rem ",
      }}
    >
      <Box display="flex" justifyContent="center">
        <h2>DASHBOARD</h2>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Paper
            style={{
              height: "30vh",
              padding: "1rem",
            }}
          >
            <Pie />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Paper
            style={{
              height: "30vh",
              padding: "rem",
            }}
          >
            <Bar />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Paper
            style={{
              height: "30vh",
              padding: "1rem",
            }}
          >
            <Bar />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Paper
            style={{
              height: "30vh",
              padding: "1rem",
            }}
          >
            <Pie />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
