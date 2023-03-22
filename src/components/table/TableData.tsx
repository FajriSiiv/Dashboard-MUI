import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Box, Button, Checkbox, Stack } from "@mui/material";
import SearchBar from "../search/searchBar";

const TableData = (props?: any) => {
  const customStyles = {
    table: {
      style: {
        color: "",
        backgroundColor: "red",
        border: "1px solid black",
      },
    },
    rows: {
      style: {
        "&:hover": {
          background: "#f8f9fa",
          cursor: "pointer",
          transition: "all .2s ease",
        },
      },
    },
  };

  return (
    <Box>
      <DataTable
        data={props.data}
        columns={props.columns}
        customStyles={customStyles}
        selectableRows
        pagination
        selectableRowsComponent={Checkbox}
        onRowClicked={props.handleRowClick}
        progressPending={props.isLoading}
      />
    </Box>
  );
};

export default TableData;
