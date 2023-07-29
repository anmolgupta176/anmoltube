import { Stack } from "@mui/material";
import { Link } from "react-router-dom";


import  SearchBar  from "./SearchBar";

const Navbar = () => (
  <Stack direction="row" alignItems="center" pt={1} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src='../anmoltube.png' alt="logo" height={65}  width={90} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;