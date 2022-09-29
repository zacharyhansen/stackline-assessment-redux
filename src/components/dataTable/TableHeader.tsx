import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import { Order } from ".";

const headCells = [
  {
    id: "WEEK ENDING",
    numeric: false,
    label: "WEEK ENDING",
  },
  {
    id: "RETAIL SALES",
    numeric: true,
    label: "RETAIL SALES",
  },
  {
    id: "WHOLESALE SALES",
    numeric: true,
    label: "WHOLESALE SALES",
  },
  {
    id: "UNITS SOLD",
    numeric: true,
    label: "UNITS SOLD",
  },
  {
    id: "RETAILOR MARGIN",
    numeric: true,
    label: "RETAILOR MARGIN",
  },
];

interface ITableHeadProps {
  order: Order;
  orderBy: string;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
}

const TableHeader: FunctionComponent<ITableHeadProps> = (props) => {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
