import { Add, AddOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_GetContact } from "../../api/contact";
import { API_GetProduct } from "../../api/product";
import AddDrawerContact from "../../components/drawer/contact/add";
import DetailDrawerContact from "../../components/drawer/contact/detail/detailDrawerDetail";
import EditDrawerContact from "../../components/drawer/contact/edit/editDrawerContact";
import DetailDrawerProducts from "../../components/drawer/products/detail";
import FilterSelect from "../../components/filter/filterSelect";
import Loading from "../../components/loading";
import SearchBar from "../../components/search/searchBar";
import TableData from "../../components/table/TableData";
import useStore from "../../store";

const Products = () => {
  const { product, getDataProduct, deleteDataContact } = useStore();
  const [drawerDetail, setDrawerDetail] = useState(false);
  const [drawerEdit, setDrawerEdit] = useState(false);
  const [idContact, setIdContact] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [rawData, setRawData] = useState([]);
  const [emptyData, setEmptyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [drawerAdd, setAddDrawer] = useState(false);
  const [filterSelect, setFilterSelect] = useState<any>([]);
  const [filterCategory, setFilterCategory] = useState<any>([]);
  const [idProduct, setIdProduct] = useState("");

  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: "Brand",
      selector: (row: any) => row.brand,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row: any) => row.category,
      sortable: true,
      cell: (row: any) => <span>{row.category}</span>,
      style: {
        textTransform: "capitalize",
      },
    },
    {
      name: "Rating",
      selector: (row: any) => row.rating,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row: any) => row.price,
      sortable: true,
      style: {
        color: "#0096c7",
      },
      cell: (row: any) => <span>${row.price}</span>,
    },
  ];

  const handleRowClick = (row: any) => {
    setDrawerDetail(true);
    setDrawerEdit(false);
    setIdProduct(row.id);
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
      item.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setRawData(searchedResults);
  };

  async function getData() {
    setIsLoading(true);

    const data = await API_GetProduct();

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

  const handleFilterSelectBrand = (
    event: SelectChangeEvent<typeof filterSelect>
  ) => {
    const {
      target: { value },
    } = event;
    setFilterSelect(typeof value === "string" ? value.split(",") : value);

    const filteredData = emptyData.filter((d: any) => value.includes(d.brand));

    if (filteredData.length === 0) {
      setRawData(emptyData);
    } else {
      setRawData(filteredData);
    }
  };

  const handleFilterSelectCategory = (
    event: SelectChangeEvent<typeof filterSelect>
  ) => {
    const {
      target: { value },
    } = event;
    setFilterCategory(typeof value === "string" ? value.split(",") : value);

    const filteredData = emptyData.filter((d: any) =>
      value.includes(d.category.toLowerCase())
    );

    if (filteredData.length === 0) {
      setRawData(emptyData);
    } else {
      setRawData(filteredData);
    }
  };

  return (
    <Box>
      <Stack direction="row" pb={2} justifyContent="space-between">
        <Typography variant="h5" fontWeight="bold">
          Product Page
        </Typography>
        <Button
          variant="outlined"
          startIcon={<AddOutlined />}
          onClick={() => setAddDrawer(true)}
        >
          Add Product
        </Button>
      </Stack>
      <Stack
        direction="row"
        pb={2}
        gap={2}
        sx={{ width: "100%" }}
        height="40px"
      >
        <SearchBar
          onChange={handleSearchBar}
          value={searchValue}
          placeholder="Search something?"
        />
        <FilterSelect
          handleChange={handleFilterSelectBrand}
          value={filterSelect}
          arrayVal={["Apple", "OPPO", "Huawei", "Infinix", "HP Pavilion"]}
        />
        <FilterSelect
          handleChange={handleFilterSelectCategory}
          value={filterCategory}
          arrayVal={[
            "laptops",
            "smartphones",
            "fragrances",
            "skincare",
            "groceries",
            "home-decoration",
          ]}
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

      <Drawer
        anchor="right"
        open={drawerDetail}
        onClose={() => {
          setDrawerDetail(false);
          setDrawerEdit(false);
        }}
      >
        <DetailDrawerProducts data={rawData} idProduct={idProduct} />
      </Drawer>

      {/* <>
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
      </> */}
    </Box>
  );
};

export default Products;
