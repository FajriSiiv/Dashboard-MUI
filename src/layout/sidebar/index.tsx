import { GroupWork } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  ListItem,
  ListItemText,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ButtonNav = styled(Box)(() => ({
  textAlign: "left",
  padding: "10px 10px",
  fontSize: "17px",
  fontWeight: 500,
  color: "#001524",
  transition: ".2s all ease",
  cursor: "pointer",
  borderRadius: "6px",
}));

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [contact, setContact] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const navigate = useNavigate();
  const params = useLocation();

  function isChooseContactPage() {
    setContact(true);
    setDashboard(false);
  }

  function isChooseDashboardPage() {
    setContact(false);
    setDashboard(true);
  }

  const ButtonListNav = (props?: any) => {
    return (
      <ButtonNav
        onClick={props.onClick}
        sx={{
          background: props.isActive ? "#000814" : null,
          color: props.isActive ? "#f8f9fa" : null,
        }}
      >
        {props.text}
      </ButtonNav>
    );
  };

  useEffect(() => {
    switch (params.pathname) {
      case "/":
        setDashboard(true);
        break;
      case "/contact":
        setContact(true);
        break;
    }
  }, [params.pathname]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <Stack direction="column" gap={1} width="90%" m={2}>
            <Stack direction="row" alignItems="center" gap={1} pb={2}>
              <GroupWork
                sx={{ width: "30px", height: "30px", color: "#1d3557" }}
              />
              <Typography fontWeight="700" variant="h6">
                {" "}
                Dashboard
              </Typography>
            </Stack>
            <ButtonListNav
              onClick={() => {
                isChooseDashboardPage();
                navigate("/");
              }}
              isActive={dashboard}
              text="Dashboard"
            />
            <ButtonListNav
              onClick={() => {
                isChooseContactPage();
                navigate("/contact");
              }}
              isActive={contact}
              text="Contact"
            />
          </Stack>
        </Grid>
        <Grid item lg={10}>
          <Box sx={{ padding: "20px" }}>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sidebar;
