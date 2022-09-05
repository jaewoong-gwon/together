import React from "react";
import { Paper, Container, Button,Box } from "@mui/material/";
import { FormControl,InputLabel,OutlinedInput} from "@mui/material";
import {useState,useEffect} from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";


function Write({history}) {

 const [values, setValues] = useState({
    boardTitle: "",
    boardContent: ""
  });

  const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };


  const handleSubmit = () => {
  const board = {
      boardTitle : values.boardTitle,
      boardContent : values.boardContent
    }
    console.log(board);
    axios.get('api/Join/insert',{
          params: {
              board : board
          }
      }).then((response)=>{
          console.log(response);
          alert('글이 등록되었습니다!')
          history.goBack();

      }).catch((error) => {
          console.log(error.response);

      })
  }

return(
<Container maxWidth="lg">
    <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="boardTitle">제목</InputLabel>
            <OutlinedInput
             value={values.boardTitle}
             onChange={handleChange("boardTitle")}
             label="제목" />
    </FormControl>
    <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="boardContent">내용</InputLabel>
                <OutlinedInput
                 multiline
                 rows={12}
                 value={values.boardContent}
                 onChange={handleChange("boardContent")}
                 label="내용" />
    </FormControl>
    <Button onClick={handleSubmit}>제출</Button>
</Container>
);
}

export default withRouter(Write); //리엑트 라우터 부가기능 중 하나로, history 를 쓰기 위함.