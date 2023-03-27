import styled from "@emotion/styled";
import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AreaChart from "../../components/chart/AreaChart";
import * as faker from "@faker-js/faker";
import ChartVisitor from "../../components/chart/ChartVisitor";
import BarChart from "../../components/chart/BarChart";
import StackedColumnChart from "../../components/chart/BarChart";
import GradientDonutChart from "../../components/chart/DonutChart";

const StyledBox = styled(Box)(({ theme, colorBorder, width }: any) => ({
  borderRadius: "7px",
  width: `${width} ? ${width} : "300px"`,
  padding: "10px",
  background: `white`,
  borderBottom: `5px solid ${colorBorder}`,
}));

const Dashboard = () => {
  const chartData1 = Array.from({ length: 8 }, () =>
    faker.faker.datatype.number({ min: 100, max: 500 })
  );

  const chartData2 = Array.from({ length: 8 }, () =>
    faker.faker.datatype.number({ min: 100, max: 500 })
  );

  const dataMonthVisitor = Array.from({ length: 12 }, () =>
    faker.faker.date.month()
  );

  const chartDataVisitor = Array.from({ length: 12 }, () =>
    faker.faker.datatype.number({ min: 1000, max: 5000 })
  );

  // data product
  const dataProduct1 = Array.from({ length: 7 }, () =>
    faker.faker.datatype.number({ min: 10, max: 1000 })
  );

  const dataProduct2 = Array.from({ length: 7 }, () =>
    faker.faker.datatype.number({ min: 10, max: 1000 })
  );

  // donut chart data
  const productNames = Array.from({ length: 6 }, () =>
    faker.faker.commerce.productName()
  );
  const productData = Array.from({ length: 6 }, () =>
    faker.faker.datatype.number({ min: 10, max: 100 })
  );

  console.log(productNames);
  return (
    <Paper sx={{ bgcolor: "#f8f9fa", minHeight: "90vh" }}>
      <Box p={5}>
        <Stack direction="row" gap={3} justifyContent="space-evenly">
          <StyledBox width="300px" colorBorder="#8338ec">
            <Stack direction="column" alignItems="flex-start">
              <Typography fontWeight="700" variant="h4" ml={3}>
                120
              </Typography>
              <AreaChart colors="#8338ec" />
            </Stack>
          </StyledBox>
          <StyledBox width="300px" colorBorder="#ef233c">
            <Stack direction="column" alignItems="flex-start">
              <Typography fontWeight="700" variant="h4" ml={3}>
                {chartData1[1]}
              </Typography>
              <AreaChart colors="#ef233c" data={chartData1} />
            </Stack>
          </StyledBox>
          <StyledBox width="300px" colorBorder="#2ec4b6">
            <Stack direction="column" alignItems="flex-start">
              <Typography fontWeight="700" variant="h4" ml={3}>
                {chartData2[1]}
              </Typography>
              <AreaChart colors="#2ec4b6" data={chartData2} />
            </Stack>
          </StyledBox>
        </Stack>
        <Box mt={5} sx={{ bgcolor: "white", padding: "5px" }}>
          <ChartVisitor data={chartDataVisitor} month={dataMonthVisitor} />
        </Box>
        <Stack direction="row" gap={5} width="100%" mt={5}>
          <Box width="50%" sx={{ bgcolor: "white", padding: "5px" }}>
            <StackedColumnChart data={[dataProduct1, dataProduct2]} />
          </Box>
          <Box width="50%" sx={{ bgcolor: "white", padding: "5px" }}>
            <GradientDonutChart data={productData} />
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default Dashboard;
