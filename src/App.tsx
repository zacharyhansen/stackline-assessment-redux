import { Counter } from "./features/counter/Counter";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import logo from "./logo.svg";

function App() {
  return (
    <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Newss
          </Typography>
          <SvgIcon>{logo}</SvgIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Newss
          </Typography>
        </Toolbar>
      </AppBar>
      <Counter />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </header>
  );
}

export default App;
