import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const listObj = [
  {
    id: 1,
    Item: "Sashimi",
    Quality: 30,
    Revenue: "293.01",
    netProfit: 710.68,
  },
  {
    id: 2,
    Item: "Unagi - Grilled Eel",
    Quality: 30,
    Revenue: "293.01",
    netProfit: 710.68,
  },
  {
    id: 3,
    Item: "Soba - Buckwheat Noodles",
    Quality: 30,
    Revenue: "293.01",
    netProfit: 710.68,
  },
  {
    id: 4,
    Item: "Onigiri - Rice Balls",
    Quality: 30,
    Revenue: "293.01",
    netProfit: 710.68,
  },
  {
    id: 5,
    Item: "Sashimi",
    Quality: 30,
    Revenue: "293.01",
    netProfit: 710.68,
  },
  {
    id: 6,
    Item: "Yakitori - Grilled Chicken",
    Quality: 30,
    Revenue: "293.01",
    netProfit: 710.68,
  },
  {
    id: 7,
    Item: "Royal Milk Tea",
    Quality: 30,
    Revenue: "293.01",
    netProfit: 710.68,
  },
  {
    id: 8,
    Item: "Flavored Soymilk Drinks",
    Quality: 30,
    Revenue: "293.01",
    netProfit: 710.68,
  },
];

function LatestOrder() {
  return (
    <div>
      <>
        <List>
          <React.Fragment>
            <ListItem
              style={{ display: "flex", flexDirection: "row" }}
              divider
              dense
            >
              <ListItemText
                style={{ flexBasis: "25%" }}
                primary={<Typography variant={"subtitle1"}>No.</Typography>}
              />
              <ListItemText
                style={{
                  textAlign: "left",
                  flexBasis: "100%",
                  // color: "lightgray",
                }}
                primary={<>Item</>}
              />
              <ListItemText
                style={{
                  textAlign: "left",
                  flexBasis: "75%",
                  // color: "lightgray",
                }}
                primary={<>Quality</>}
              />
              <ListItemText
                style={{
                  textAlign: "left",
                  flexBasis: "75%",
                  // color: "lightgray",
                }}
                primary={<>Revenue</>}
              />
              <ListItemText
                style={{
                  textAlign: "left",
                  flexBasis: "75%",
                  // color: "lightgray",
                }}
                primary={<>Net Profit</>}
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
                    style={{ flexBasis: "25%" }}
                    primary={
                      <Typography variant={"subtitle1"}>{index + 1}</Typography>
                    }
                  />
                  <ListItemText
                    style={{
                      textAlign: "left",
                      flexBasis: "100%",
                      // color: "lightgray",
                    }}
                    primary={<>{item.Item}</>}
                  />
                  <ListItemText
                    style={{
                      textAlign: "left",
                      flexBasis: "75%",
                      // color: "lightgray",
                    }}
                    primary={<>{item.Quality}</>}
                  />
                  <ListItemText
                    style={{
                      textAlign: "left",
                      flexBasis: "75%",
                      // color: "lightgray",
                    }}
                    primary={<>{item.Revenue}</>}
                  />
                  <ListItemText
                    style={{
                      textAlign: "left",
                      flexBasis: "75%",
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
    </div>
  );
}

export default LatestOrder;
