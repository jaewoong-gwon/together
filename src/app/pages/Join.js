import React from "react";
import { Paper, Container, Button } from "@mui/material/";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from "@mui/material/";
import {useState,useEffect} from "react";
import axios from "axios";

function Join() {

    const [rows,setRows] = useState([]);

    useEffect(()=> {
        axios
         .get("api/Join")
         .then((response)=>{
                 const items = response.data.data;
                 items.map(item => {
                    setRows([item]);
                 })
             });

        },[]);

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
              key={row.boradId}
            >
              <TableCell component="th" scope="row">
                {row.boradId}
              </TableCell>
              <TableCell align="right">{row.boradTitle}</TableCell>
              <TableCell align="right">{row.createDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button>확인</Button>

</Container>
);
}

export default Join;