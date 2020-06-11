import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";

import CustomerTable from "./Table";
import CustomerForm from "./Form";
import { Add } from "@material-ui/icons";

export default function Customers() {
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
  const [customer, setCustomer] = useState({});

  function toggleDrawer() {
    setOpenForm(!openForm);
  }

  function handleAddCustomer() {
    setCustomer({});
    toggleDrawer();
  }

  function handleEditCustomer({ row }) {
    setCustomer(row);
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
        <h2>CLIENTES</h2>
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
          onClick={handleAddCustomer}
        >
          CLIENTE
        </Button>
      </Box>
      <CustomerTable data={data} handleEditCustomer={handleEditCustomer} />
      <CustomerForm
        open={openForm}
        toggleDrawer={toggleDrawer}
        customer={customer}
      />
    </Box>
  );
}
