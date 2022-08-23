import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";

function MainBanner(props) {
  const { post } = props;
  const maxId = 2;
  const [id, setId] = useState("0");
  const [image, setImage] = useState(post[id].url);
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
      }}
    >
      {<img style={{ display: "none" }} src={image} />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item xs={1} container justifyContent="center" alignItems="center">
          <Box sx={{ position: "absolute" }}>
            <IconButton
              aria-label="before"
              size="small"
              onClick={() => {
                if (Number(id) === 0) {
                  setImage(post[maxId].url);
                  setId(maxId);
                } else {
                  setImage(post[Number(id) - 1].url);
                  setId(Number(id) - 1);
                }
              }}
            >
              <NavigateBeforeIcon sx={{ fontSize: 40, stroke: "white", strokeWidth: 0.5 }} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              width: "100vw",
              height: "30vh",
            }}
          />
        </Grid>
        <Grid item xs={1} container justifyContent="center" alignItems="center">
          <Box sx={{ position: "absolute" }}>
            <IconButton
              aria-label="next"
              size="small"
              onClick={() => {
                if (Number(id) === maxId) {
                  setImage(post[0].url);
                  setId(0);
                } else {
                  setImage(post[Number(id) + 1].url);
                  setId(Number(id) + 1);
                }
              }}
            >
              <NavigateNextIcon sx={{ fontSize: 40, stroke: "white", strokeWidth: 0.5 }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainBanner;
