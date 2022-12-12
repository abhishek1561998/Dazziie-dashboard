import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./layouts/Sidebar";
import Appbar from "./layouts/Appbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Routes from "./Routes";
// import Food from "./components/Food";
import Order from "./components/Order";
import Customer from "./components/Customer";
import DashboardPage from "./components/DashboardPage";
import CouponPage from "./components/Coupon";
// import { NavLink, useLocation } from "react-router-dom";

export default function App() {
  // const location = useLocation();

  // const [title, setTitle] = React.useState("");

  // React.useEffect(() => {
  //   location.pathname === "customers"
  //     ? setTitle("Customers")
  //     : setTitle("Orders");
  // }, []);

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Appbar />
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 5,
            background: "#F7F7FC",
            color: "#000",
            height: "100vh",
          }}
        >
          {/* <h1>{title}</h1> */}

          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/customers" component={Customer} />
            <Route exact path="/coupons" component={CouponPage} />
          </Switch>
          {/* </Box> */}
        </Box>
      </Box>
    </Router>
  );
}
