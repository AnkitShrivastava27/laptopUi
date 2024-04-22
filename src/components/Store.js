import { legacy_createStore as createStore,combineReducers } from "redux";
import productReducer from "./Reducer";
import AuthReducer from "./AuthReducer";

const store = createStore(combineReducers({
    productReducer:productReducer,
    AuthReducer:AuthReducer
})
)

export default store