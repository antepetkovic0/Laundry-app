export const CREATE_ORDER = "CREATE_ORDER";
export const FETCH_ORDERS = "FETCH_ORDERS";
export const EDIT_ORDER_STATUS = "EDIT_ORDER_STATUS";

export const fetchOrders = (orders) => ({
  type: FETCH_ORDERS,
  payload: {
    orders,
    fetchTime: new Date().getTime(),
  },
});

export const createOrder = (order) => ({
  type: CREATE_ORDER,
  payload: {
    order,
  },
});

export const editOrderStatus = (orderId, status) => ({
  type: EDIT_ORDER_STATUS,
  payload: {
    orderId,
    status,
  },
});
