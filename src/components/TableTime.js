import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { id_Esporte } from '../database/time';

function TableTime(data) {
  var rows = data.data;
  var headCells = [
      {
        field: 'nome',
        headerName: 'Nome',
        width: 500,
      }, 
      {
        field: 'ano',
        headerName: 'Ano',
        type: 'number',
        width: 100, 
      }, 
      {
        field: 'verba',
        headerName: 'Verba',
        type: 'number',
        width: 100, 
      }, 
      {
        field: 'esporte',
        headerName: 'Esporte',
        type: 'number',
        width: 100, 
        valueGetter: (params) =>
        `${id_Esporte(params.row.esporte).nome}`,
      }, 
  ];
    
    return(
      <div style={{ height: 475, width: '100%', margin: 5 }}>
        <DataGrid
          rows={rows}
          columns={headCells}
          pageSize={7}
          rowsPerPageOptions={[7]}
        />
      </div>
    );
  }

export default TableTime;