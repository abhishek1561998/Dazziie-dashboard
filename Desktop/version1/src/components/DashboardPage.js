import {
  Grid,
  alpha,
  InputBase,
  makeStyles,
  Box,
  TextField,
  Tabs,
  Tab,
  Typography,
  InputAdornment,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Food from "./Food";
import Snaks from "./Snaks";
import Drinks from "./Drink";
import Package from "./Package";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function DashboardPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Box
        style={{
          marginTop: "2.5rem",
          marginLeft: "5rem",
          borderRadius: "8px",
          background: "white",
          padding: "2rem",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <TextField
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="search here ..."
                fullWidth
                id="fullWidth"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 5,
                  borderColor: "divider",
                  "& .MuiTabs-indicator": {
                    height: "4px",
                    background: "#5541D7",
                  },
                }}
              >
                <Tabs
                  style={{ marginBottom: "-5px" }}
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    sx={{
                      width: "20%",
                      fontWeight: "800",
                      "&.Mui-selected": {
                        color: "#5541D7 !important",
                      },
                    }}
                    label="All"
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{
                      width: "20%",
                      fontWeight: "800",
                      "&.Mui-selected": {
                        color: "#5541D7 !important",
                      },
                    }}
                    label="Food"
                    {...a11yProps(1)}
                  />
                  <Tab
                    sx={{
                      width: "20%",
                      fontWeight: "800",
                      "&.Mui-selected": {
                        color: "#5541D7 !important",
                      },
                    }}
                    label="Drinks"
                    {...a11yProps(2)}
                  />
                  <Tab
                    sx={{
                      width: "20%",
                      fontWeight: "800",
                      "&.Mui-selected": {
                        color: "#5541D7 !important",
                      },
                    }}
                    label="Snaks"
                    {...a11yProps(3)}
                  />
                  <Tab
                    sx={{
                      width: "20%",
                      fontWeight: "800",
                      "&.Mui-selected": {
                        color: "#5541D7 !important",
                      },
                    }}
                    label="Packages"
                    {...a11yProps(4)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Food />
                <Drinks />
                <Snaks />
                <Package />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Food />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Drinks />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Snaks />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Package />
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default DashboardPage;
