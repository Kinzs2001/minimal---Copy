import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import VerticalLayout from "../Layouts/index";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import User from "../pages/Authentication/user-profile";
import ManageCategory from '../pages/Authentication/ManageCategory';
import ManageUser from '../pages/Authentication/ManageUser';


const Index = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
            <VerticalLayout />
                <Routes>                       
                    <Route path="/manage-category" element={<ManageCategory />} />
                    <Route path="/manage-users" element={<ManageUser />} />
                    <Route path="/login" target="_blank" element={<Login />} />
                    <Route path="/register" target="_blank" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default Index;