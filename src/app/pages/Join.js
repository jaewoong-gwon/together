import React from "react";
import { Paper, Container, Button,Box,Checkbox } from "@mui/material/";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TablePagination } from "@mui/material/";
import {useState,useEffect} from "react";
import axios from "axios";

function Join() {

    const [rows,setRows] = useState([]);
    const [checkedBox, setCheckedBox] = useState([]); //check 된 checkBox 를 관리. id값 즉 db에 바로 사용 가능한 key 값을 저장.
    const [checked,setChecked] = useState(false);
    const [page,setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChildChange = (event) => {
        console.log(event.target);
        const key = event.target.id; // String
        if(event.target.checked){ setCheckedBox([...checkedBox, {id : key}]);}

        else {
            const temp = [...checkedBox];
            const result = temp.filter(temp => temp.id != key);
            //해당 조건리 t`rue면 요소를 유지, false면 버림) 새로운 배열로 반환
            setCheckedBox(result);
            console.log(checkedBox);
            }
        }

    const handleParentChecked = (event) => {
        console.log(event.target.className);
        setChecked(event.target.checked);
        if(checked){console.log(checkedBox);}
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

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
            <TableCell><Checkbox className="root" checked={checked} onChange={handleParentChecked}/></TableCell>
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
                {/*mui Checkbox 의 id prop은 Stirng type. row.boardId는 int */}
              <TableCell><Checkbox id={row.boardId.toString()} onChange={handleChildChange}/></TableCell>
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
          <TablePagination
            component="div"
            count={rows.length}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={page} rowsPerPage={10}
            rowsPerPageOptions={[10]}/>
    </TableContainer>

    <Button href="/Write">글쓰기</Button>
    <Button>삭제</Button>
</Container>
);
}

export default Join;