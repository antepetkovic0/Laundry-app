import RegisterImage from "../../assets/images/register_feature.jpg";
import OrderImage from "../../assets/images/order_feature.jpg";
import ManageServiceImage from "../../assets/images/manage_service_feature.jpg";
import DeliveryImage from "../../assets/images/delivery_feature.jpg";

export const CARD_DATA = (role) => [
  {
    key: "step_one",
    image: RegisterImage,
    title: "Step one",
    description: `Sign as a ${
      role !== "USER" ? "shop owner" : "user"
    } and use all the opportunities provided by the certain role`,
  },
  {
    key: "step_two",
    image: role !== "USER" ? ManageServiceImage : OrderImage,
    title: "Step two",
    description:
      role !== "USER"
        ? "Manage your laundry shop by adding the price list and services you provide"
        : "Choose between registered laundry services and order specific laundry clean you need",
  },
  {
    key: "step_three",
    image: DeliveryImage,
    title: "Step three",
    description:
      role !== "USER"
        ? "Deliver an order to the requested location and charge your services"
        : "Pickup a delivery at the requested location and pay up for the clean services",
  },
];
