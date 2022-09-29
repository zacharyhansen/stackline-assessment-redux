import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

interface ILoaderProps {}

const Loader: FunctionComponent<ILoaderProps> = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
