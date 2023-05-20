import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = ["Hotel Name", "Hotel Description", "Hotel Img", "Hotel Price"];

const rows = [
  {
    HotelName: "HotelName",
    HotelDescription: "Hotel Description",
    HotelImg: "Hotel Img",
    HotelPrice: "Hotel Price",
  },
  {
    HotelName: "HotelName",
    HotelDescription: "Hotel Description",
    HotelImg: "Hotel Img",
    HotelPrice: "Hotel Price",
  },
  {
    HotelName: "HotelName",
    HotelDescription: "Hotel Description",
    HotelImg: "Hotel Img",
    HotelPrice: "Hotel Price",
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox">
              <TableCell>Hotl 1</TableCell>
              <TableCell>Hotl 1</TableCell>
              <TableCell>Hotl 1</TableCell>
              <TableCell>Hotl 1</TableCell>
              <TableCell>Hotl 1</TableCell>
              <TableCell>Hotl 1</TableCell>
              <TableCell>Hotl 1</TableCell>
              <TableCell>Hotl 1</TableCell>
            </TableRow>
            {/* {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                console.log("row",row);
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>{row.HotelName}</TableCell>
                    <TableCell>{row.HotelName}</TableCell>
                    <TableCell>{row.HotelName}</TableCell>
                    <TableCell>{row.HotelName}</TableCell>
                  </TableRow>
                );
              })} */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
