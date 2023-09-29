import React from 'react';
import { Routes, Route } from "react-router-dom";

import VerticalLayout from "../Layouts/index";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import User from "../pages/Authentication/user-profile";


const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                {/* <Route path="/login" element={<Login/>} /> */}
                <Route path="/" element={<VerticalLayout/>} />
                {/* <Route path="/logout" element={<Logout/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/user" element={<User/>} /> */}
            </Routes>
        </React.Fragment>
    );
};

export default Index;