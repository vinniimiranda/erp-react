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

export default function ({ data, handleEditMaterial }) {
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
            <TableCell>Nome</TableCell>
            <TableCell align="center">Código</TableCell>
            <TableCell align="center">Descrição</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="center">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.slug}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.stock.quantity}</TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => handleEditMaterial({ row })}
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
