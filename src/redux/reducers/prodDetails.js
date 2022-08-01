import { ActionTypes } from "../contains/actionTypes";

export const initialState = {
  products: [],
  basketItems: [],
  currentUser:[],
  orderItems:[],
  searchOrders:[],

};

export const productReducer = (state = initialState, action) => {
  
  
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload.products };
    case ActionTypes.ADD_BASKET_ITEM:
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload.product],
      };
    case ActionTypes.REMOVE_BASKET_ITEM:
      return {
        ...state,
        basketItems: state.basketItems.filter((product) => {
          return product.id !== action.payload.id;
        }),
      };
      case ActionTypes.GET_USER:
        return{
          ...state,
          currentUser: action.payload.currentUser
        }
      case ActionTypes.ORDER_ITEM:
        return{
          ...state,
          orderItems:[...state.orderItems,action.payload.order]
        }
      case ActionTypes.REMOVE_ORDER:
        return{
          ...state,
          orderItems:state.orderItems.filter((product)=>{
            return product.id !== action.payload.id
          })
        }
      case ActionTypes.SEARCH_ORDER:
        console.log(state.searchOrders);
        return{
          ...state,
          searchOrders: state.products.filter((product) => { 
            return product.title.toLowerCase().includes(action.payload.item); 
          })
        }

    
    default:
      return state;
  }
};
// [...state.searchOrders,action.payload.item]