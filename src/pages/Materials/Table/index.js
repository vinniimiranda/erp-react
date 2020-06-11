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
  withStyles,
} from "@material-ui/core";

import { Edit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

export default function ({ data, handleEditMaterial }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      paddingTop: ".5rem",
      paddingBottom: ".5rem",
    },
    body: {
      fontSize: "1rem",
    },
  }))(TableCell);

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
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="center">Código</StyledTableCell>
            <StyledTableCell align="center">Descrição</StyledTableCell>
            <StyledTableCell align="center">Quantidade</StyledTableCell>
            <StyledTableCell align="center">Editar</StyledTableCell>
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
