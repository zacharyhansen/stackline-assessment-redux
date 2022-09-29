import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as Logo } from "./logo.svg";
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { loadSalesAsync } from "./slices/sales";
import Graph from "./components/graph";
import DataTable from "./components/dataTable";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ItemCard from "./components/ItemCard";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadSalesAsync());
  }, [dispatch]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <SvgIcon sx={{ fontSize: "80px" }}>
            <Logo />
          </SvgIcon>
        </Toolbar>
      </AppBar>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Box className="component-box">
            <ItemCard />
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box className="component-box">
            <Graph />
          </Box>
          <Box className="component-box">
            <DataTable />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
