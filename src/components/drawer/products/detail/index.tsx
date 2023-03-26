import {
  AttachMoney,
  BrandingWatermark,
  Category,
  DescriptionOutlined,
  Inventory2Outlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const DetailDrawerProducts = (props?: any) => {
  const filterData = props.data.filter((e: any) => e.id === props.idProduct)[0];
  console.log(filterData);

  return (
    <Box p={5} width="500px">
      <Stack direction="column" gap={3}>
        <Typography variant="h2" fontSize={25} fontWeight="700">
          {filterData.title}
        </Typography>
        <Box sx={{ height: "300px", width: "100%", position: "relative" }}>
          <img
            loading="lazy"
            src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Stack direction="row" gap={1} alignItems="center">
          <DescriptionOutlined fontSize="large" />
          <Stack direction="column" gap={1}>
            <Typography variant="caption">Description</Typography>
            <Typography variant="body1">{filterData.description}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" gap={1} alignItems="center" width="100%">
            <AttachMoney fontSize="large" />
            <Stack direction="column" gap={1}>
              <Typography variant="caption">Price</Typography>
              <Typography variant="body1">${filterData.price}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={1} alignItems="center" width="100%">
            <StarBorderOutlined fontSize="large" />
            <Stack direction="column" gap={1}>
              <Typography variant="caption">Rating</Typography>
              <Typography variant="body1">{filterData.rating}</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" gap={1} alignItems="center">
          <Inventory2Outlined fontSize="large" />
          <Stack direction="column" gap={1}>
            <Typography variant="caption">Stock</Typography>
            <Typography variant="body1">{filterData.stock}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={1} alignItems="center">
          <BrandingWatermark fontSize="large" />
          <Stack direction="column" gap={1}>
            <Typography variant="caption">Brand</Typography>
            <Typography variant="body1">{filterData.brand}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={1} alignItems="center">
          <Category fontSize="large" />
          <Stack direction="column" gap={1}>
            <Typography variant="caption">Category</Typography>
            <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
              {filterData.category}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DetailDrawerProducts;
