import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

class Home extends React.Component {
  render() {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Link to="/shopping-list">Shopping list</Link>
        <Link to="/connection">Connection</Link>
        <Link to="/listDepartement">Liste des départements</Link>
        <Link to="/movieDataBase">Liste des films</Link>
      </Box>
    );
  }
}

export default Home;
