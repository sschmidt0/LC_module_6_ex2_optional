import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { CharacterVm } from 'common/models';

export interface CharacterTableProps {
  characters: CharacterVm[];
  onEdit: (id: string) => void;
}

export const CharacterTable = ({ characters, onEdit }: CharacterTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="info about character">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 900 }}>Name</TableCell>
            <TableCell style={{ fontWeight: 900 }}>Best Sentence</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={character.id}
            >
              <TableCell component="th" scope="row">
                {character.name}
              </TableCell>
              <TableCell>{character.bestSentence}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(character.id)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
