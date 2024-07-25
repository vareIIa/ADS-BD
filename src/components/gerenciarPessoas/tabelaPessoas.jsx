import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Padding } from '@mui/icons-material';

function createData(nome, CARGO, NASCIMENTO, INICIO, SKILLS) {
  return { nome, CARGO, NASCIMENTO, INICIO, SKILLS};
}

const rows = [
  createData('Alexandre Gonçalves Dias', 'Desenvolvedor Junior', '01/01/1999', '01/01/1999', 2),
  createData('Alisson Vinicius Ferreira Goncalves', 'Desenvolvedor Junior','01/01/1999', '01/01/1999', 2),
  createData('Ana Laura Dos Santos Franco', 'Desenvolvedor Junior', '01/01/1999', '01/01/1999', 1),
  createData('Anna Rita Tomich Magalhães Felippe', 'Desenvolvedor Junior', '01/01/1999', '01/01/1999', 1),
  createData('Arthur Breno Silva Rosa', 'Desenvolvedor Junior', '01/01/1999', '01/01/1999', 0),
  createData('Artur Henrique Almeida Magalhaes', 'Desenvolvedor Junior', '01/01/1999', '01/01/1999', 1.5),

  ``
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

  };

  return (
  
    <Box sx={{display: ''}}>
    <Paper elevation={5} sx={{maxWidth: '65vw', marginBottom: 5}}>
      <Box style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px',
        gap: '40px',
        
      }}>
        <Typography><strong>Lista de Usuários</strong></Typography>
        <TextField
          label="Buscar..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          fullWidth
          style={{ maxWidth: '80%', maxHeight: '8vh', marginBottom: '20px', marginTop: '20px' }}
        />
      </Box>
      </Paper>


      <TableContainer style={{ maxHeight: 300, overflow: 'auto', overflowX: 'auto' }}>
        <Table stickyHeader aria-label="sticky table" style={{ minWidth: '65vw', maxWidth: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Cargo</TableCell>
              <TableCell align="center">Data de Nascimento</TableCell>
              <TableCell align="center">Data de Inicio</TableCell>
              <TableCell align="center">Skills</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {rows.filter((row) => {
              const values = Object.values(row)
              return values.some((value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
              );
            }).map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{row.nome}</TableCell>
                <TableCell align="center">{row.CARGO}</TableCell>
                <TableCell align="center">{row.NASCIMENTO}</TableCell>
                <TableCell align="center">{row.INICIO}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};