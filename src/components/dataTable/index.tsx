import { FunctionComponent, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "../../app/hooks";
import { salesStatus, selectSales } from "../../slices/sales";
import Loader from "../loader";
import TableHeader from "./TableHeader";

export type Order = "asc" | "desc";

interface ITableProps {}

const DataTable: FunctionComponent<ITableProps> = () => {
  const sales = useAppSelector(selectSales);
  const status = useAppSelector(salesStatus);
  const [order, setOrder] = useState<Order>("desc");
  const [orderBy, setOrderBy] = useState<string>("WEEK ENDING");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    // Here is where we would make the sorting api call
    // In any real world situation sorting will be done via api for any sizable data set
  };

  if (status !== "idle") {
    return <Loader />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {sales.map((sale) => (
            <TableRow
              key={sale.weekEnding}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {sale.weekEnding}
              </TableCell>
              <TableCell align="right">{sale.retailSales}</TableCell>
              <TableCell align="right">{sale.wholesaleSales}</TableCell>
              <TableCell align="right">{sale.unitsSold}</TableCell>
              <TableCell align="right">{sale.retailerMargin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
