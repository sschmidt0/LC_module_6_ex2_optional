import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import React from 'react';

export interface InfoTableProps {
  gender: string;
  status: string;
  origin: string;
  location: string;
}

export const InfoTable = ({
  gender,
  location,
  origin,
  status,
}: InfoTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="info about character">
        <TableHead>
          <TableRow>
            <TableCell>Gender</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {gender}
            </TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>{origin}</TableCell>
            <TableCell>{location}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
