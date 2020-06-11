import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";

import SupplierTable from "./Table";
import SupplierForm from "./Form";

export default function Suppliers() {
  const data = [
    {
      id: 10,
      document: "1505005502c",
      slug: "EMPRESA2",
      social_name: "EMPRESA c1",
      address_id: 14,
      status: true,
      created_at: "2020-06-07 20:55:01",
      updated_at: "2020-06-07 20:55:01",
      address: {
        id: 14,
        cep: "07408050",
        state: "SP",
        city: "Guarulhos",
        street: "Rua 1234kk",
        number: "5058",
        neighborhood: "Centro",
        complement: "Bolinha",
        created_at: "2020-06-07 20:55:01",
        updated_at: "2020-06-07 20:55:01",
      },
    },
    {
      id: 12,
      document: "15050055029",
      slug: "EMPRESc",
      social_name: "EMPRESAc",
      address_id: 15,
      status: true,
      created_at: "2020-06-08 06:02:12",
      updated_at: "2020-06-08 06:02:12",
      address: {
        id: 15,
        cep: "07408050",
        state: "SP",
        city: "Guarulhos",
        street: "Rua 1234kk",
        number: "5058",
        neighborhood: "Centro",
        complement: "Bolinha",
        created_at: "2020-06-08 06:02:12",
        updated_at: "2020-06-08 06:02:12",
      },
    },
  ];
  const [openForm, setOpenForm] = useState(false);
  const [supplier, setSupplier] = useState({});

  function toggleDrawer() {
    setOpenForm(!openForm);
  }

  function handleAddSupplier() {
    setSupplier({});
    toggleDrawer();
  }

  function handleEditSupplier({ row }) {
    setSupplier(row);
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="2rem"
      >
        <h1>FORNECEDORES</h1>
        <Button
          color="primary"
          variant="contained"
          style={{
            color: "#fff",
          }}
          onClick={handleAddSupplier}
        >
          Novo fornecedor
        </Button>
      </Box>
      <SupplierTable data={data} handleEditSupplier={handleEditSupplier} />
      <SupplierForm
        open={openForm}
        toggleDrawer={toggleDrawer}
        supplier={supplier}
      />
    </Box>
  );
}
