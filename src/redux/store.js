import { createStore } from "redux";
import reducer from "./reducers";
import { initialState } from "./reducers/prodDetails";

const store = createStore(reducer, initialState);
export default store;