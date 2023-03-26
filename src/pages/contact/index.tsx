import { Add, AddOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_GetContact } from "../../api/contact";
import AddDrawerContact from "../../components/drawer/contact/add";
import DetailDrawerContact from "../../components/drawer/contact/detail/detailDrawerDetail";
import EditDrawerContact from "../../components/drawer/contact/edit/editDrawerContact";
import Loading from "../../components/loading";
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
  const [drawerAdd, setAddDrawer] = useState(false);

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
      style: {
        color: "#0096c7",
      },
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

  if (isLoading) return <Loading />;

  return (
    <Box>
      <Stack direction="row" pb={2} justifyContent="space-between">
        <Typography variant="h5" fontWeight="bold">
          Halaman Kontak
        </Typography>
        <Button
          variant="outlined"
          startIcon={<AddOutlined />}
          onClick={() => setAddDrawer(true)}
        >
          Tambah Data
        </Button>
      </Stack>
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
      <>
        <Drawer
          anchor="right"
          open={drawerAdd}
          onClose={() => {
            setDrawerDetail(false);
            setDrawerEdit(false);
            setAddDrawer(false);
          }}
        >
          <AddDrawerContact
            handleDetailOut={() => {
              setAddDrawer(false);
              getData();
            }}
            closeView={() => {
              setDrawerEdit(false);
              setDrawerDetail(false);
              setAddDrawer(false);
            }}
          />
        </Drawer>
      </>
    </Box>
  );
};

export default Contact;
