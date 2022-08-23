import * as React from "react";
import { IconButton, Button, Drawer, Toolbar, Icon } from "@mui/material";
import { Input, FormControl, InputAdornment, InputLabel } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Box } from "@mui/system";
import { useState } from "react";

const ulStyle = {
  listStyle: "none",
  margin: "0 auto",
};

const liStyle = {
  border: 0,
  float: "left",
};

const MouseOverEvent = (event) => {
  event.target.style.color = "red";
};

const MouseOutEvent = (event) => {
  event.target.style.color = "inherit";
};

function Nav(props) {
  const { sections } = props;

  const [open, setOpen] = useState(false);

  const search = (
    <Box sx={{ postion: "relative", m: "auto", height: 200 }}>
      <FormControl variant="standard" sx={{ postion: "absolute", top: 50, width: 600 }}>
        <InputLabel>검색어를 입력하세요.</InputLabel>
        <Input
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <IconButton
        sx={{ postion: "absolute", top: 60 }}
        onClick={() => {
          setOpen(false);
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );

  return (
    <React.Fragment>
      <Toolbar component="nav" variant="dense" sx={{ height: "5vh" }}>
        <Box sx={{ m: "auto", display: "inline-block" }}>
          <ul style={ulStyle}>
            {sections.map((section) => (
              <li key={section.id} style={liStyle}>
                <Button
                  id={section.id}
                  variant="body2"
                  href={section.url}
                  onMouseOver={(event) => {
                    MouseOverEvent(event);
                  }}
                  onMouseOut={(event) => {
                    MouseOutEvent(event);
                  }}
                >
                  {section.title}
                </Button>
              </li>
            ))}
            <li style={liStyle}>
              <IconButton
                onClick={() => {
                  setOpen(true);
                }}
              >
                <SearchIcon />
              </IconButton>
              <Drawer
                sx={{ height: "20vh" }}
                anchor="top"
                open={open}
                onClose={() => {
                  setOpen(false);
                }}
              >
                {search}
              </Drawer>
            </li>
            <li style={liStyle}>
              <IconButton>
                <DensityMediumIcon />
              </IconButton>
            </li>
          </ul>
        </Box>
      </Toolbar>
    </React.Fragment>
  );
}

export default Nav;
