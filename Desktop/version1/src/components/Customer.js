import {
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const listObj = [
  {
    id: "XXX1",
    name: "Arlene McCoy",
    JoinDate: "1 February 2021",
    TotalVisit: "5",
    PurchasedItems:
      "americano(10); latte (8); cappuccino(14);maxxhiato (1); vanilla latte (5)",
    netProfit: 710.68,
  },
  {
    id: "XXX2",
    name: "Savannah Nguyen",
    JoinDate: "1 Fe 2021",
    TotalVisit: "2",
    PurchasedItems:
      "americano(10); latte (8); cappuccino(14);maxxhiato (1); vanilla latte (5)",
    netProfit: 710.68,
  },
  {
    id: "XXX3",
    name: "Jacob Jones",
    JoinDate: "1 Fe 2021",
    TotalVisit: "2",
    PurchasedItems:
      "americano(10); latte (8); cappuccino(14);maxxhiato (1); vanilla latte (5)",
    netProfit: 710.68,
  },
  {
    id: "XXX4",
    name: "Jerome Bell",
    JoinDate: "1 Fe 2021",
    TotalVisit: "9",
    PurchasedItems:
      "americano(10); latte (8); cappuccino(14);maxxhiato (1); vanilla latte (5)",
    netProfit: 710.68,
  },
  {
    id: "XXX5",
    name: "Cody Fisher",
    JoinDate: "1 Fe 2021",
    TotalVisit: "2",
    PurchasedItems:
      "americano(10); latte (8); cappuccino(14);maxxhiato (1); vanilla latte (5)",
    netProfit: 710.68,
  },
  {
    id: "XXX6",
    name: "Kathryn Murphy",
    JoinDate: "1 Fe 2021",
    TotalVisit: "2",
    PurchasedItems:
      "americano(10); latte (8); cappuccino(14);maxxhiato (1); vanilla latte (5)",
    netProfit: 710.68,
  },
  {
    id: "XXX7",
    name: "Jane Cooper",
    JoinDate: "1 Fe 2021",
    TotalVisit: "8",
    PurchasedItems:
      "americano(10); latte (8); cappuccino(14);maxxhiato (1); vanilla latte (5)",
    netProfit: 710.68,
  },
  {
    id: "XXX8",
    name: "Ronald Richards",
    JoinDate: "1 Fe 2021",
    TotalVisit: "2",
    PurchasedItems:
      "americano(10); latte (8); cappuccino(14);maxxhiato (1); vanilla latte (5)",
    netProfit: 710.68,
  },
];

function Customer() {
  return (
    <div>
      <Box style={{ marginTop: "2.5rem", marginLeft: "5rem" }}>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={8}>
            <h2>Customer</h2>
          </Grid>
          <Grid item xs={4} dir={"rtl"}>
            {/* <Button variant="contained" color="primary">
              Create New
            </Button> */}
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{
          // marginTop: "5rem",
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
                  primary={<>Name</>}
                />
                <ListItemText
                  style={{
                    textAlign: "left",
                    flexBasis: "75%",
                    // color: "lightgray",
                  }}
                  primary={<>Join Date</>}
                />
                <ListItemText
                  style={{
                    textAlign: "left",
                    flexBasis: "75%",
                    // color: "lightgray",
                  }}
                  primary={<>Total Visit</>}
                />
                <ListItemText
                  style={{
                    textAlign: "left",
                    flexBasis: "90%",
                    // color: "lightgray",
                  }}
                  primary={<>Purchased Items</>}
                />
                <ListItemText
                  style={{
                    textAlign: "left",
                    flexBasis: "30%",
                    // color: "lightgray",
                  }}
                  primary={<>Total Spend</>}
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
                      primary={<>{item.name}</>}
                    />
                    <ListItemText
                      style={{
                        textAlign: "left",
                        flexBasis: "75%",
                        // color: "lightgray",
                      }}
                      primary={<>{item.JoinDate}</>}
                    />
                    <ListItemText
                      style={{
                        textAlign: "left",
                        flexBasis: "75%",
                        // color: "lightgray",
                      }}
                      primary={<>{item.TotalVisit}</>}
                    />
                    <ListItemText
                      style={{
                        textAlign: "left",
                        flexBasis: "90%",
                        // color: "lightgray",
                      }}
                      primary={
                        <>
                          {item.PurchasedItems} <br />
                          <Link
                            style={{ textDecoration: "none", color: "#5541D7" }}
                          >
                            Sea Details
                          </Link>
                        </>
                      }
                    />
                    <ListItemText
                      style={{
                        textAlign: "left",
                        flexBasis: "30%",
                        // color: "lightgray",
                      }}
                      primary={<>{item.netProfit}</>}
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

export default Customer;
