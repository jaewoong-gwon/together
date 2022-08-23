import * as React from "react";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const ulStyle = {
  listStyle: "none",
  margin: "auto",
  padding: "auto",
};

const liStyle = {
  margin: 10,
  display: "flex",
  flexDirection: "column",
};

function Sidebar(props) {
  const { lists } = props;
  {
    lists.map((list) => {
      console.log(list);
    });
  }
  return (
    <Box
      sx={{
        display: "inline-block",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul style={ulStyle}>
        {lists.map((list) => (
          <li key={list.id} style={liStyle}>
            <NavLink
              to={list.url}
              style={{ textDecoration: "none", color: "inherit", backgroundColor: "grey" }}
            >
              {list.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Sidebar;
