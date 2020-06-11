import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@material-ui/core";

import { Edit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

export default function ({ data, handleEditCustomer }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();
  return (
    <TableContainer
      component={Paper}
      style={{
        maxHeight: "72vh",
      }}
    >
      <Table
        className={classes.table}
        aria-label="simple table"
        stickyHeader
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell>CNPJ</TableCell>
            <TableCell align="center">Razão Social</TableCell>
            <TableCell align="center">Nome Fantasia</TableCell>
            <TableCell align="center">CEP</TableCell>
            <TableCell align="center">Cidade</TableCell>
            <TableCell align="center">Estado</TableCell>
            <TableCell align="center">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.document}</TableCell>
              <TableCell align="center">{row.slug}</TableCell>
              <TableCell align="center">{row.social_name}</TableCell>
              <TableCell align="center">{row.address.cep}</TableCell>
              <TableCell align="center">{row.address.city}</TableCell>
              <TableCell align="center">{row.address.state}</TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => handleEditCustomer({ row })}
                  variant="outlined"
                  color="secondary"
                >
                  <Edit />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
