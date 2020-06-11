import React from "react";
import { Box } from "@material-ui/core";

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
    </Box>
  );
}
