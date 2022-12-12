import {
  Button,
  FormControlLabel,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled from "@emotion/styled";

// const IOSSwitch = styled((props) => (
//   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
//   width: 42,
//   height: 26,
//   padding: 0,
//   "& .MuiSwitch-switchBase": {
//     padding: 0,
//     margin: 2,
//     transitionDuration: "300ms",
//     "&.Mui-checked": {
//       transform: "translateX(16px)",
//       color: "#fff",
//       "& + .MuiSwitch-track": {
//         backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
//         opacity: 1,
//         border: 0,
//       },
//       "&.Mui-disabled + .MuiSwitch-track": {
//         opacity: 0.5,
//       },
//     },
//     "&.Mui-focusVisible .MuiSwitch-thumb": {
//       color: "#33cf4d",
//       border: "6px solid #fff",
//     },
//     "&.Mui-disabled .MuiSwitch-thumb": {
//       color:
//         theme.palette.mode === "light"
//           ? theme.palette.grey[100]
//           : theme.palette.grey[600],
//     },
//     "&.Mui-disabled + .MuiSwitch-track": {
//       opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     boxSizing: "border-box",
//     width: 22,
//     height: 22,
//   },
//   "& .MuiSwitch-track": {
//     borderRadius: 26 / 2,
//     backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
//     opacity: 1,
//     transition: theme.transitions.create(["background-color"], {
//       duration: 500,
//     }),
//   },
// }));

const listObj = [
  {
    id: "01",
    code: "20 % off Entire Order",
    discount: "20 %y 2021",
    startDate: "Fab 14 2021",
    endDate: "Fab 14 2022",
  },
  {
    id: "02",
    code: "20 % off Entire Order",
    discount: "20 %",
    startDate: "Fab 14 2021",
    endDate: "Fab 14 2022",
  },
  {
    id: "03",
    code: "20 % off Entire Order",
    discount: "20 %",
    startDate: "Fab 14 2021",
    endDate: "Fab 14 2022",
  },
  {
    id: "04",
    code: "20 % off Entire Order",
    discount: "20 %",
    startDate: "Fab 14 2021",
    endDate: "Fab 14 2022",
  },
  {
    id: "05",
    code: "20 % off Entire Order",
    discount: "20 %",
    startDate: "Fab 14 2021",
    endDate: "Fab 14 2022",
  },
  {
    id: "06",
    code: "20 % off Entire Orderphy",
    discount: "20 %",
    TotalVisit: "2",
    endDate: "Fab 14 2022",
  },
];

function Coupon() {
  //   console.log("Coupon");
  return (
    <div>
      <Box style={{ marginTop: "2.5rem", marginLeft: "5rem" }}>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={8}>
            <h2>Coupon</h2>
          </Grid>
          <Grid item xs={4} dir={"rtl"}>
            <Button variant="contained" color="primary">
              Create New
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{
          marginLeft: "5rem",
          borderRadius: "8px",
          background: "white",
          padding: "2rem",
        }}
      >
        <>
          <Grid
            container
            spacing={2}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={11}>
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
            <Grid item xs={0.5}>
              <FilterListIcon />
            </Grid>
            <Grid item xs={0.5}>
              <MoreVertIcon />
            </Grid>
          </Grid>
        </>
        <>
          <List>
            <React.Fragment>
              <ListItem
                style={{
                  display: "flex",
                  flexDirection: "row",
                  background: "#F7F7FC",
                  padding: "10px",
                  color: "#11142D",
                }}
                divider
                dense
              >
                <ListItemText
                  style={{ flexBasis: "75%" }}
                  primary={<Typography variant={"subtitle1"}>ID</Typography>}
                />
                <ListItemText
                  style={{
                    textAlign: "left",
                    flexBasis: "75%",
                    // color: "lightgray",
                  }}
                  primary={<>Code</>}
                />
                <ListItemText
                  style={{
                    textAlign: "left",
                    flexBasis: "75%",
                    // color: "lightgray",
                  }}
                  primary={<>Discount</>}
                />
                <ListItemText
                  style={{
                    textAlign: "left",
                    flexBasis: "75%",
                    // color: "lightgray",
                  }}
                  primary={<>Start Date</>}
                />
                <ListItemText
                  style={{
                    textAlign: "left",
                    flexBasis: "90%",
                    // color: "lightgray",
                  }}
                  primary={<>End Date</>}
                />
                <ListItemText
                  style={{
                    textAlign: "left",
                    flexBasis: "30%",
                    // color: "lightgray",
                  }}
                  primary={<>Activate</>}
                />
              </ListItem>
            </React.Fragment>
            {listObj.map((item, index) => {
              return (
                <React.Fragment>
                  <ListItem
                    style={{ display: "flex", flexDirection: "row" }}
                    divider
                    dense
                  >
                    <ListItemText
                      style={{ flexBasis: "75%" }}
                      primary={
                        <Typography variant={"subtitle1"}>{item.id}</Typography>
                      }
                    />
                    <ListItemText
                      style={{
                        textAlign: "left",
                        flexBasis: "75%",
                        // color: "lightgray",
                      }}
                      primary={<>{item.code}</>}
                    />
                    <ListItemText
                      style={{
                        textAlign: "left",
                        flexBasis: "75%",
                        // color: "lightgray",
                      }}
                      primary={<>{item.discount}</>}
                    />
                    <ListItemText
                      style={{
                        textAlign: "left",
                        flexBasis: "75%",
                        // color: "lightgray",
                      }}
                      primary={<>{item.startDate}</>}
                    />
                    <ListItemText
                      style={{
                        textAlign: "left",
                        flexBasis: "90%",
                        // color: "lightgray",
                      }}
                      primary={
                        <>
                          {item.endDate} <br />
                        </>
                      }
                    />
                    <ListItemText
                      style={{
                        textAlign: "left",
                        flexBasis: "30%",
                        // color: "lightgray",
                      }}
                      primary={
                        <>
                          <FormControlLabel
                            control={<Switch sx={{ m: 1 }} defaultChecked />}
                          />
                        </>
                      }
                    />
                  </ListItem>
                </React.Fragment>
              );
            })}
          </List>
        </>
      </Box>
    </div>
  );
}

export default Coupon;
