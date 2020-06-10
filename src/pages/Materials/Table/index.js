import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

import { Edit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

export default function({ data, handleEditMaterial }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Material</TableCell>
            <TableCell align="center">Código</TableCell>
            <TableCell align="center">Descrição</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="center">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.slug}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.stock.quantity}</TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => handleEditMaterial({ row })}
                  variant="outlined"
                  color="secondary"
                >
                  <Edit />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
