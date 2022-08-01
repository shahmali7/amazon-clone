import { ActionTypes } from "../contains/actionTypes"

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: { products },
  };
};

export const addBasketItem = (product) => {
  return {
    type: ActionTypes.ADD_BASKET_ITEM,
    payload: { product },
  };
};
export const removeBasketItem = (id) => {
  return {
    type: ActionTypes.REMOVE_BASKET_ITEM,
    payload: { id },
  };
};
export const getUserMail =(currentUser)=>{
  return{
    type: ActionTypes.GET_USER,
    payload: {currentUser}
  }
}
export const OrderItem = (order)=>{
  return {
    type:ActionTypes.ORDER_ITEM,
    payload: {order}
  }
}
export const removeOrderItem = (id) => {
  return {
    type: ActionTypes.REMOVE_ORDER,
    payload: { id },
  };
};
export const SearchOrder = (item) => {
  // console.log(item) working
  return {
    type: ActionTypes.SEARCH_ORDER,
    payload: { item },
  };
};