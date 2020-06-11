import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import { Box, Button } from "@material-ui/core";

import MaterialTable from "./Table";
import MaterialForm from "./Form";

export default function Main() {
  const data = [
    {
      id: 1,
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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
      slug: "FAR01",
      name: "Farinha de trigo 2",
      description: "Farinha de trigto tipo 1",
      status: true,
      created_at: "2020-06-07 20:27:40",
      updated_at: "2020-06-07 20:27:40",
      stock: {
        id: 3,
        material_id: 4,
        quantity: 0,
        status: true,
        created_at: "2020-06-07 20:27:40",
        updated_at: "2020-06-07 20:27:40",
      },
    },
    {
      id: 1,
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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
      slug: "FAR01",
      name: "Farinha de trigo 2",
      description: "Farinha de trigto tipo 1",
      status: true,
      created_at: "2020-06-07 20:27:40",
      updated_at: "2020-06-07 20:27:40",
      stock: {
        id: 3,
        material_id: 4,
        quantity: 0,
        status: true,
        created_at: "2020-06-07 20:27:40",
        updated_at: "2020-06-07 20:27:40",
      },
    },
    {
      id: 1,
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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
      slug: "FAR01",
      name: "Farinha de trigo 2",
      description: "Farinha de trigto tipo 1",
      status: true,
      created_at: "2020-06-07 20:27:40",
      updated_at: "2020-06-07 20:27:40",
      stock: {
        id: 3,
        material_id: 4,
        quantity: 0,
        status: true,
        created_at: "2020-06-07 20:27:40",
        updated_at: "2020-06-07 20:27:40",
      },
    },
    {
      id: 1,
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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
      slug: "FAR01",
      name: "Farinha de trigo 2",
      description: "Farinha de trigto tipo 1",
      status: true,
      created_at: "2020-06-07 20:27:40",
      updated_at: "2020-06-07 20:27:40",
      stock: {
        id: 3,
        material_id: 4,
        quantity: 0,
        status: true,
        created_at: "2020-06-07 20:27:40",
        updated_at: "2020-06-07 20:27:40",
      },
    },
    {
      id: 1,
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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
      slug: "FAR01",
      name: "Farinha de trigo 2",
      description: "Farinha de trigto tipo 1",
      status: true,
      created_at: "2020-06-07 20:27:40",
      updated_at: "2020-06-07 20:27:40",
      stock: {
        id: 3,
        material_id: 4,
        quantity: 0,
        status: true,
        created_at: "2020-06-07 20:27:40",
        updated_at: "2020-06-07 20:27:40",
      },
    },
  ];
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
        padding: "1rem 2rem ",
      }}
    >
      <Navigation />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="2rem"
      >
        <div></div>
        <h1>MATERIAIS</h1>
        <Button
          color="primary"
          variant="contained"
          style={{
            color: "#fff",
          }}
          onClick={handleAddMaterial}
        >
          Novo material
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
