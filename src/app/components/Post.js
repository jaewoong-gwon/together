import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Card, CardActionArea, CardContent } from "@mui/material";

function Post(props) {
  const { post } = props;
  return (
    <Grid item xs={3} md={3}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" sx={{fontSize : "2vw"}}>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
export default Post;
