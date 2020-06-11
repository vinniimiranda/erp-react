import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";

import MaterialTable from "./Table";
import MaterialForm from "./Form";
import { Add } from "@material-ui/icons";

export default function Material() {
  const data = [];
  for (let i = 1; i <= 25; i++) {
    if (i % 2) {
      data.push({
        id: i,
        slug: "FAR05",
        name: "Farinha de trigo",
        description: "Farinha de trigto tipo 1",
        status: true,
        created_at: "2020-06-07 20:16:58",
        updated_at: "2020-06-07 20:16:58",
        stock: {
          id: 1,
          material_id: 1,
          quantity: 0,
          status: true,
          created_at: "2020-06-07 20:16:58",
          updated_at: "2020-06-07 20:16:58",
        },
      });
    } else {
      data.push({
        id: i,
        slug: "FAR03",
        name: "Farinha de trigo 3",
        description: "Farinha de trigto tipo 1",
        status: true,
        created_at: "2020-06-07 20:27:06",
        updated_at: "2020-06-07 20:27:06",
        stock: {
          id: 2,
          material_id: 3,
          quantity: 0,
          status: true,
          created_at: "2020-06-07 20:27:06",
          updated_at: "2020-06-07 20:27:06",
        },
      });
    }
  }
  const [openForm, setOpenForm] = useState(false);
  const [material, setMaterial] = useState({});

  function toggleDrawer() {
    setOpenForm(!openForm);
  }

  function handleAddMaterial() {
    setMaterial({});
    toggleDrawer();
  }

  function handleEditMaterial({ row }) {
    setMaterial(row);
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
        <h2>MATERIAIS</h2>
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
          onClick={handleAddMaterial}
        >
          material
        </Button>
      </Box>
      <MaterialTable data={data} handleEditMaterial={handleEditMaterial} />
      <MaterialForm
        open={openForm}
        toggleDrawer={toggleDrawer}
        material={material}
      />
    </Box>
  );
}
