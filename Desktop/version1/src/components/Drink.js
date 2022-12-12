import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import demoImg from "../assets/demo.png";

let foodObj = [
  {
    id: 1,
    img: demoImg,
    name: "Amazake",
    price: "$20",
  },
  {
    id: 2,
    img: demoImg,
    name: "Royal Milk Tea",
    price: "$50",
  },
  {
    id: 3,
    img: demoImg,
    name: "Flavored Soymilk Drinks",
    price: "$100",
  },
];

function Drinks() {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <h3>Drinks</h3>

      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        {foodObj.map((item) => {
          return (
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="170"
                  image={item.img}
                  alt="green iguana"
                  style={{ padding: "8px 12px", borderRadius: "18px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="#42BDA1">
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default Drinks;
