import React from 'react';
import { Routes, Route } from "react-router-dom";

import VerticalLayout from "../Layouts/index";



const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/dashboard" element={<VerticalLayout/>} />
            </Routes>
        </React.Fragment>
    );
};

export default Index;