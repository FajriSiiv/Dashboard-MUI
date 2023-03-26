import {
  AccountCircleOutlined,
  BadgeOutlined,
  ApartmentOutlined,
  PhoneAndroidOutlined,
  HomeOutlined,
  WorkOutlineOutlined,
  HomeRepairServiceOutlined,
  AlternateEmailOutlined,
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
} from "@mui/icons-material";
import {
  Typography,
  Stack,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import useStore from "../../../../store";

const EditDrawerContact = (props?: any) => {
  const [data, setData] = useState<any>(props.data);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");
  const [work, setWork] = useState("");
  const [address, setAddress] = useState("");
  const [numberHP, setNumberHP] = useState("");
  const [email, setEmail] = useState("");

  const filterData: any = data.filter((e: any) => e.id === props.idContact)[0];
  const { contact, editDataContact } = useStore();

  const handleSave = async () => {
    await editDataContact(props.idContact, {
      name,
      username,
      address: {
        city,
      },
      phone: numberHP,
      company: {
        name: company,
        catchPhrase: work,
      },
      email,
    });

    props.handleDetailOut();
  };

  const addressAll = `${filterData.address.street} ${filterData.address.suite} ${filterData.address.city}`;

  useEffect(() => {
    setName(filterData.name);
    setUsername(filterData.username);
    setCity(filterData.address.city);
    setCompany(filterData.company.name);
    setWork(filterData.company.catchPhrase);
    setAddress(addressAll);
    setNumberHP(filterData.phone);
    setEmail(filterData.email);
  }, []);

  return (
    <Box p={3} width="50vw" maxWidth={500}>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={600}
        thumbMinSize={30}
        universal={true}
      >
        {filterData && (
          <Stack direction="column" gap={4} width="100%" mr={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              gap={3}
              alignItems="center"
              sx={{ height: "100px" }}
            >
              <TextField
                value={name}
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
                fullWidth
                label="Nama"
              />
              <IconButton onClick={props.detailView}>
                <EditOutlined fontSize="small" />
              </IconButton>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ minWidth: "50%", width: "100%" }}
            >
              <BadgeOutlined fontSize="large" />
              <Stack direction="column" sx={{ width: "100%" }}>
                <TextField
                  value={username}
                  variant="outlined"
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                  label="Username"
                />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ minWidth: "50%", width: "100%" }}
            >
              <ApartmentOutlined fontSize="large" />
              <Stack direction="column" sx={{ width: "100%" }}>
                <TextField
                  value={city}
                  variant="outlined"
                  onChange={(e) => setCity(e.target.value)}
                  fullWidth
                  label="Kota"
                />
              </Stack>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ minWidth: "50%", width: "100%" }}
            >
              <HomeRepairServiceOutlined fontSize="large" />
              <Stack direction="column" sx={{ width: "100%" }}>
                <TextField
                  value={company}
                  variant="outlined"
                  onChange={(e) => setCompany(e.target.value)}
                  fullWidth
                  label="Perusahaan"
                />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ minWidth: "50%", width: "100%" }}
            >
              <WorkOutlineOutlined fontSize="large" />
              <Stack direction="column" sx={{ width: "100%" }}>
                <TextField
                  value={work}
                  variant="outlined"
                  onChange={(e) => setWork(e.target.value)}
                  fullWidth
                  label="Pekerjaan"
                />
              </Stack>
            </Stack>
            <hr />
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ minWidth: "50%", width: "100%" }}
            >
              <HomeOutlined fontSize="large" />
              <Stack direction="column" sx={{ width: "100%" }}>
                <TextField
                  value={address}
                  variant="outlined"
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  label="Alamat Rumah"
                />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ minWidth: "50%", width: "100%" }}
            >
              <PhoneAndroidOutlined fontSize="large" />
              <Stack direction="column" sx={{ width: "100%" }}>
                <TextField
                  value={numberHP}
                  variant="outlined"
                  onChange={(e) => setNumberHP(e.target.value)}
                  fullWidth
                  label="Nomor HP"
                />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ minWidth: "50%", width: "100%" }}
            >
              <AlternateEmailOutlined fontSize="large" />
              <Stack direction="column" sx={{ width: "100%" }}>
                <TextField
                  value={email}
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  label="Email"
                />
              </Stack>
            </Stack>
          </Stack>
        )}
      </Scrollbars>
      <Button
        sx={{ marginTop: "50px", float: "right" }}
        variant="outlined"
        color="primary"
        startIcon={<SaveOutlined fontSize="large" />}
        onClick={handleSave}
      >
        Save
      </Button>
    </Box>
  );
};

export default EditDrawerContact;
