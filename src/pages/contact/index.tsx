import { Box, Button, Drawer, IconButton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_GetContact } from "../../api/contact";
import DetailDrawerContact from "../../components/drawer/contact/detail/detailDrawerDetail";
import EditDrawerContact from "../../components/drawer/contact/edit/editDrawerContact";
import SearchBar from "../../components/search/searchBar";
import TableData from "../../components/table/TableData";
import useStore from "../../store";

const Contact = () => {
  const { contact, getDataContact, deleteDataContact } = useStore();
  const [drawerDetail, setDrawerDetail] = useState(false);
  const [drawerEdit, setDrawerEdit] = useState(false);
  const [idContact, setIdContact] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [rawData, setRawData] = useState([]);
  const [emptyData, setEmptyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: "Nomor HP",
      selector: (row: any) => row.phone,
      sortable: true,
    },
    {
      name: "Perusahan",
      selector: (row: any) => row.company.name,
      sortable: true,
    },
    {
      name: "Kota",
      selector: (row: any) => row.address.city,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => row.email,
      sortable: true,
    },
  ];

  const handleRowClick = (row: any) => {
    setDrawerDetail(true);
    setDrawerEdit(false);
    setIdContact(row.id);
  };

  // Delete Data
  const handleDlete = async () => {
    await deleteDataContact(idContact);
    setDrawerDetail(false);
  };

  const handleSearchBar = (event: any) => {
    setSearchValue(event.target.value);

    let newData = JSON.parse(JSON.stringify(emptyData));
    const searchedResults = newData.filter((item: any) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setRawData(searchedResults);
  };

  async function getData() {
    setIsLoading(true);

    const data = await API_GetContact();

    setRawData(data);
    setEmptyData(data);

    setIsLoading(false);
  }

  const handleReset = () => {
    setSearchValue("");
    setRawData(emptyData);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <p>Loading..</p>;

  return (
    <Box p={3}>
      <Stack direction="row" pb={2} gap={2} sx={{ width: "100%" }}>
        <SearchBar
          onChange={handleSearchBar}
          value={searchValue}
          placeholder="Search something?"
        />
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </Stack>

      <TableData
        data={rawData}
        columns={columns}
        handleRowClick={handleRowClick}
        isLoading={isLoading}
      />

      <>
        <Drawer
          anchor="right"
          open={drawerDetail}
          onClose={() => {
            setDrawerDetail(false);
            setDrawerEdit(false);
          }}
        >
          {drawerEdit === false ? (
            <DetailDrawerContact
              data={rawData}
              idContact={idContact}
              handleDelete={handleDlete}
              EditView={() => {
                setDrawerEdit(true);
              }}
            />
          ) : (
            <EditDrawerContact
              data={rawData}
              idContact={idContact}
              handleDetailOut={() => {
                setDrawerDetail(false);
                getData();
              }}
              detailView={() => {
                setDrawerEdit(false);
              }}
            />
          )}
        </Drawer>
      </>
    </Box>
  );
};

export default Contact;
