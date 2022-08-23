import React from "react";
import { Paper, Container } from "@mui/material/";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from "@mui/material/";
import {useState} from "react";

function Join() {

function createData(
  id: number,
  title: String,
  date : Date,
) {
  return { id, title, date };
}

const [rows,setRows] = useState([

]);

return(
<Container maxWidth="lg">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>제목</TableCell>
            <TableCell align="right">작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

</Container>
);
}

export default Join;