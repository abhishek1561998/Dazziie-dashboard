import { Box, Card, Grid } from "@mui/material";
import React from "react";
import downArrow from "../assets/Icons/downArrow.png";
import uparrow from "../assets/Icons/uparrow.png";
import ItemSold from "./ItemSold";
import LatestOrder from "./LatestOrder";

function Order() {
  return (
    <React.Fragment>
      <Box
        style={{
          marginTop: "2.5rem",
          marginLeft: "5rem",
          borderRadius: "8px",
          // background: "white",
          padding: "2rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item sm={3} xs={12}>
            <Card elevation={0}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFF",
                  padding: "10px",
                }}
              >
                <div>
                  <strong>Customer</strong>
                </div>
                <div>
                  <img src={downArrow} alt="arrow" />
                </div>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFF",
                  padding: "10px",
                }}
              >
                <div>
                  <strong>1000</strong>
                </div>
                <div>
                  <span style={{ color: "red" }}>
                    <strong>-15%</strong>
                  </span>
                </div>
              </Box>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card elevation={0}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFF",
                  padding: "10px",
                }}
              >
                <div>
                  <strong>Orders</strong>
                </div>
                <div>
                  <img src={uparrow} alt="arrow" />
                </div>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFF",
                  padding: "10px",
                }}
              >
                <div>
                  <strong>1050</strong>
                </div>
                <div>
                  <span style={{ color: "#42BDA1" }}>
                    <strong>+20%</strong>
                  </span>
                </div>
              </Box>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card elevation={0}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFF",
                  padding: "10px",
                }}
              >
                <div>
                  <strong>Revenue</strong>
                </div>
                <div>
                  <img src={uparrow} alt="arrow" />
                </div>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFF",
                  padding: "10px",
                }}
              >
                <div>
                  <strong>$50.000</strong>
                </div>
                <div>
                  <span style={{ color: "#42BDA1" }}>
                    <strong>+10%</strong>
                  </span>
                </div>
              </Box>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card elevation={0}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFF",
                  padding: "10px",
                }}
              >
                <div>
                  <strong>Nett Profit</strong>
                </div>
                <div>
                  <img src={downArrow} alt="arrow" />
                </div>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFF",
                  padding: "10px",
                }}
              >
                <div>
                  <strong>$12.000</strong>
                </div>
                <div>
                  <span style={{ color: "#42BDA1" }}>
                    <strong>+12%</strong>
                  </span>
                </div>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={3}>
          <Grid item sm={8}>
            <Card elevation={0}>
              <h5 style={{ paddingLeft: "10px" }}>Latest Order</h5>
              <LatestOrder />
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card elevation={0}>
              <ItemSold />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Order;
