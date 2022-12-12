import { Dashboard } from "@mui/icons-material";
import { ReactComponent as CustomerIcon } from "../assets/Icons/customer.svg";
// import { ReactComponent as  } from "../assets/Icons/Coupon Discount.svg";
// import { ReactComponent as CustomerIcon } from "../assets/Icons/filter.svg";
// import { ReactComponent as CustomerIcon } from "../assets/Icons/Notification Bell.svg";
import { ReactComponent as Order } from "../assets/Icons/orders.svg";
import { ReactComponent as Package } from "../assets/Icons/Package.svg";
import { ReactComponent as Setting } from "../assets/Icons/seettings.svg";
import { ReactComponent as User } from "../assets/Icons/user.svg";
import { ReactComponent as Coupon } from "../assets/Icons/Coupon Discount.svg";
// import { ReactComponent as CustomerIcon } from "../assets/Icons/pen.svg";
// import { ReactComponent as CustomerIcon } from "../assets/Icons/plus.svg";
// import { ReactComponent as CustomerIcon } from "../assets/Icons/SEARCH.svg";
// import { ReactComponent as ThreeDot } from "../assets/Icons/threedots.svg";

const SideCardMenu = [
  {
    title: "Food",
    link: "/",
    icon: <Dashboard style={{ marginRight: "" }} />,
  },
  {
    title: "Customer",
    link: "/customers",
    icon: <CustomerIcon />,
  },
  {
    title: "Order",
    link: "/order",
    icon: <Order />,
  },
  {
    title: "Package",
    link: "/package",
    icon: <Package />,
  },
  {
    title: "Coupon",
    link: "/coupons",
    icon: <Coupon />,
  },
  {
    title: "user",
    link: "/users",
    icon: <User />,
  },
  {
    title: "Setting",
    link: "/setting",
    icon: <Setting />,
  },
  // {
  //   title: "Log out",
  //   link: "/login",
  //   icon: undefined,
  // },
];

export default SideCardMenu;
