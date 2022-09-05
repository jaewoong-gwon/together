import React from "react";
import { Paper, Container, Button,Checkbox,IconButton } from "@mui/material/";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TableFooter } from "@mui/material/";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {useState,useEffect} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

let count = 1; //해당함수는 리로드 될시 전체를 리로드 하기 떄문에 변수 선언을 join 밖에서 해줘야지, 리로드 되도 값이 초기화 되지 않는다.
//함수 전체 export 가 아닌 기능적인 부분을 뺀, 나머지를 export 하는 방식으로 바꿔야할듯.

function Join({history}) {

    const [total,setTotal] = useState([]);//전체 DB 결과를 저장.
    const [rows,setRows] = useState([]); //totalData를 복사하여, 첫번째 테이블 화면에 표시할 데이터만 저장.
    const [checkedBox, setCheckedBox] = useState([]); //check 된 checkBox 를 관리. id값 즉 db에 바로 사용 가능한 key 값을
    // 저장.
    const [checked,setChecked] = useState(false);

    const handleChildChange = (event) => {
        const key = event.target.id; // String
        if(event.target.checked) { //체크박스에 체크 된 경우.
            setCheckedBox([...checkedBox, Number(key)]);
        }
        if (!event.target.checked){ // 체크 안된 경우.
            const temp = [...checkedBox];
            const result = temp.filter(temp => temp.id !== Number(key));
            //해당 조건이 true면 요소를 유지, false면 버림) 새로운 배열로 반환
            setCheckedBox(result);
            }
        }

    const handleParentChecked = (event) => {
    }

    const handleDelete = () => {
        console.log(checkedBox);
        const answer = window.confirm("진짜 삭제함??");
            if(answer === true){
                axios.post("api/Join/delete",{
                        board : checkedBox
                }).then((response)=>{
                    //history.goBack();
                }).catch((error) => {
                    console.log(error.response);
                })

            }
    }

    const handleChangePage = (event) => {
        const target = event.currentTarget.id; //누른 버튼 확인
        const element = rows[rows.length-1]; //rows의 마지막 값.
        const elementIndex = total.indexOf(element); // 읽어온 마지막 값으로 원본에서의 index를 검색.
        if(target === "before"){
            count--;
            console.log(elementIndex%10+1);
            setRows(total.slice(elementIndex-19,elementIndex-9));
        }
        else if(target === "next"){
            count++;
            console.log(count);
            setRows(total.slice(elementIndex+1,count*10));
        }

    }

    //effect 함수에 원하는 값을 넘겨주기 위해선 ref hooks 사용해야함.
    useEffect(()=> {
        axios
         .get("api/Join")
         .then((response)=>{
                 const items = response.data;
                 setTotal(items); //total에 바로 적용되지 않음 -> React는 비동기 방식이기 때문.
                 setRows(items.slice(undefined,10));
                 //slice -> begin(Index) 부터 end(Index) 까지(end 미포함)
             });
        },[]);
        //Effect의 경우 마운트와 관련이 있기 때문에, 모든 데이터가 렌더링 된 후 화면에 표시하는듯 (추정)

return(
<Container maxWidth="lg">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
              <TableCell><Checkbox className="root" checked={checked} onChange={handleParentChecked}/></TableCell>
              <TableCell>번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell align="right">내용</TableCell>
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
              <TableCell>
                {row.boardId}
              </TableCell>
              <TableCell>{row.boardTitle}</TableCell>
              <TableCell align="right">{row.boardContent}</TableCell>
              <TableCell align="right">{row.createDate}</TableCell>
            </TableRow>
          ))}
            <TableRow>
                <TableCell/>
                <TableCell/>
                <TableCell/>
                <TableCell align="right"/>
                <TableCell align="right">
                    <IconButton id="before" onClick={handleChangePage}><NavigateBeforeIcon/></IconButton>
                    <IconButton id="next" onClick={handleChangePage}><NavigateNextIcon/></IconButton>
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        <Button href="/Write">글쓰기</Button>
        <Button onClick={handleDelete}>삭제</Button>
</Container>
);
}

export default  withRouter(Join);