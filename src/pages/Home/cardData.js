import RegisterS from "../../assets/images/register_feature_small.jpg";
import RegisterL from "../../assets/images/register_feature_large.jpg";
import OrderS from "../../assets/images/order_feature_small.jpg";
import OrderL from "../../assets/images/order_feature_large.jpg";
import ManageServiceS from "../../assets/images/manage_service_feature_small.jpg";
import ManageServiceL from "../../assets/images/manage_service_feature_large.jpg";
import DeliveryS from "../../assets/images/delivery_feature_small.jpg";
import DeliveryL from "../../assets/images/delivery_feature_large.jpg";

export const CARD_DATA = (role) => [
  {
    key: "step_one",
    imageS: RegisterS,
    imageL: RegisterL,
    title: "Step one",
    description: `Sign as a ${
      role !== "USER" ? "shop owner" : "user"
    } and use all the opportunities provided by the certain role`,
  },
  {
    key: "step_two",
    imageS: role !== "USER" ? ManageServiceS : OrderS,
    imageL: role !== "USER" ? ManageServiceL : OrderL,
    title: "Step two",
    description:
      role !== "USER"
        ? "Manage your laundry shop by adding the price list and services you provide"
        : "Choose between registered laundry services and order specific laundry clean you need",
  },
  {
    key: "step_three",
    imageS: DeliveryS,
    imageL: DeliveryL,
    title: "Step three",
    description:
      role !== "USER"
        ? "Deliver an order to the requested location and charge your services"
        : "Pickup a delivery at the requested location and pay up for the clean services",
  },
];
