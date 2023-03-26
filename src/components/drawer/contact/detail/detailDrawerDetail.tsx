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
} from "@mui/icons-material";
import { Typography, Stack, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";

const DetailDrawerContact = (props?: any) => {
  const [data, setData] = useState<any>(props.data);

  const filterData = data.filter((e: any) => e.id === props.idContact)[0];

  const RenderData = (props: any) => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        sx={{ minWidth: "50%" }}
      >
        {props.icons}
        <Stack direction="column">
          <Typography variant="caption" color="#6c757d">
            {props.text}
          </Typography>
          <Typography variant="body1" color="#212529">
            {props.value}
          </Typography>
        </Stack>
      </Stack>
    );
  };

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
          <Stack direction="column" gap={4} mr={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              gap={3}
              alignItems="center"
              sx={{ height: "100px" }}
            >
              <Typography variant="h2" fontSize={30} fontWeight="bold">
                {filterData.name}
              </Typography>
              <IconButton onClick={props.EditView}>
                <EditOutlined fontSize="small" />
              </IconButton>
            </Stack>

            <RenderData
              text="Name"
              value={filterData.name}
              icons={<BadgeOutlined fontSize="large" />}
            />
            <Stack direction="row" justifyContent="space-between">
              <RenderData
                text="Username"
                value={filterData.username}
                icons={<AccountCircleOutlined fontSize="large" />}
              />
              <RenderData
                text="Kota"
                value={filterData.address.city}
                icons={<ApartmentOutlined fontSize="large" />}
              />
            </Stack>
            <RenderData
              text="Perusahaan"
              value={filterData.company.name}
              icons={<WorkOutlineOutlined fontSize="large" />}
            />
            <RenderData
              text="Pekerjaan"
              value={filterData.company.catchPhrase}
              icons={<HomeRepairServiceOutlined fontSize="large" />}
            />
            <hr />

            <RenderData
              text="Alamat Rumah"
              value={`${filterData.address.street} ${filterData.address.suite} ${filterData.address.city} ${filterData.address.zipcode}`}
              icons={<HomeOutlined fontSize="large" />}
            />

            <RenderData
              text="Nomor HP"
              value={filterData.phone}
              icons={<PhoneAndroidOutlined fontSize="large" />}
            />

            <RenderData
              text="Email"
              value={filterData.email}
              icons={<AlternateEmailOutlined fontSize="large" />}
            />
          </Stack>
        )}
      </Scrollbars>
      <Button
        sx={{ marginTop: "50px", float: "left" }}
        variant="outlined"
        color="error"
        startIcon={<DeleteOutlined fontSize="large" />}
        onClick={props.handleDelete}
      >
        Hapus
      </Button>
    </Box>
  );
};

export default DetailDrawerContact;
