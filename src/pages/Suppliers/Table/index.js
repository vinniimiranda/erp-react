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

export default function ({ data, handleEditSupplier }) {
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

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

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
            <StyledTableCell>CNPJ</StyledTableCell>
            <StyledTableCell align="center">Razão Social</StyledTableCell>
            <StyledTableCell align="center">Nome Fantasia</StyledTableCell>
            <StyledTableCell align="center">CEP</StyledTableCell>
            <StyledTableCell align="center">Cidade</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">Editar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <TableCell>{row.document}</TableCell>
              <TableCell align="center">{row.slug}</TableCell>
              <TableCell align="center">{row.social_name}</TableCell>
              <TableCell align="center">{row.address.cep}</TableCell>
              <TableCell align="center">{row.address.city}</TableCell>
              <TableCell align="center">{row.address.state}</TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => handleEditSupplier({ row })}
                  variant="outlined"
                  color="secondary"
                >
                  <Edit />
                </IconButton>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
