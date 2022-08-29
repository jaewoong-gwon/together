import React from "react";
import { Paper, Container, Button,Box } from "@mui/material/";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow } from "@mui/material/";
import {useState,useEffect} from "react";
import axios from "axios";

function Join() {

    const [rows,setRows] = useState([]);

    useEffect(()=> {
        axios
         .get("api/Join")
         .then((response)=>{
                 const items = response.data.data;
                 setRows(items);
             });

        },[]);

return(
<Container maxWidth="lg">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>내용</TableCell>
            <TableCell align="right">작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.boardId}
            >
              <TableCell component="th" scope="row">
                {row.boardId}
              </TableCell>
              <TableCell>{row.boardTitle}</TableCell>
              <TableCell>{row.boardContent}</TableCell>
              <TableCell align="right">{row.createDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button href="/Write">글쓰기</Button>
</Container>
);
}

export default Join;