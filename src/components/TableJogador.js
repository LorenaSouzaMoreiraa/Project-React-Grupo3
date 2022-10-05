import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

function TableJogadores(data) {
  var rows = data.data;
  var headCells = [
      /**
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90, ' ',
      }, 
      {
        id: 'nome',
        numeric: false,
        label: 'Nome',
      },
      {
        id: 'idade',
        numeric: true,
        label: 'Idade',
      },
      {
        id: 'altura',
        numeric: true,
        label: 'Altura',
      },
      {
        id: 'peso',
        numeric: true,
        label: 'Peso',
      },*/
      
      {
        field: 'nome',
        headerName: 'Nome',
        width: 500,
      }, 
      {
        field: 'idade',
        headerName: 'Idade',
        type: 'number',
        width: 100, 
      }, 
      {
        field: 'peso',
        headerName: 'Peso',
        type: 'number',
        width: 100, 
      }, 
      {
        field: 'altura',
        headerName: 'Altura',
        type: 'number',
        width: 100, 
      }, 
  ];
    
    return(
      /**
      <TableContainer >
        <Table sx={{ minWidth: 700, mt:5 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headCells.map((head) => (
                <TableCell align="left">{head.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                <TableCell align="left">{row.nome}</TableCell>
                <TableCell align="left">{row.idade}</TableCell>
                <TableCell align="left">{row.altura}</TableCell>
                <TableCell align="left">{row.peso}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer> */
      <div style={{ height: 475, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={headCells}
          pageSize={7}
          rowsPerPageOptions={[7]}
        />
      </div>
    );
  }

export default TableJogadores;