import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import Profile from "./auth/profile/reducer";





const rootReducer = combineReducers({
    // public
    Layout,
    Login,
    Account,
    Profile,
});

export default rootReducer;