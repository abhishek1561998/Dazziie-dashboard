import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import demoListImage from "../assets/Icons/demoListImage.png";

const listObj = [
  {
    id: 1,
    Item: "Sashimi",
    img: demoListImage,
    Quality: 430,
  },
  {
    id: 2,
    Item: "Unagi - Grilled Eel",
    img: demoListImage,
    Quality: 430,
  },
  {
    id: 3,
    Item: "Soba - Buckwheat Noodles",
    img: demoListImage,
    Quality: 430,
  },
  {
    id: 4,
    Item: "Onigiri - Rice Balls",
    img: demoListImage,
    Quality: 430,
  },
  {
    id: 5,
    Item: "Sashimi",
    img: demoListImage,
    Quality: 430,
  },
];

function ItemSold() {
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
                style={{ flexBasis: "50%" }}
                primary={
                  <Typography>
                    <strong>Item Sold</strong>
                  </Typography>
                }
              />
              <ListItemText
                style={{ flexBasis: "50%" }}
                primary={<Typography variant={"subtitle1"}></Typography>}
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
                    style={{ flexBasis: "50%" }}
                    primary={<img src={item.img} alt="sold-img" />}
                  />
                  <ListItemText
                    style={{
                      textAlign: "left",
                      flexBasis: "80%",
                      // color: "lightgray",
                    }}
                    primary={<>{item.Item}</>}
                  />
                  <ListItemText
                    style={{
                      textAlign: "left",
                      flexBasis: "30%",
                      color: "gray",
                    }}
                    primary={<>{item.Quality} Items</>}
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

export default ItemSold;
