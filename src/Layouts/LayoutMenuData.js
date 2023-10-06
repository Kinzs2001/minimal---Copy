import React, { useEffect, useState } from "react";

//Import Icons
import { FiLayers } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

const Navdata = () => {
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isCategory, setIsCategory] = useState(false);
    const [isManageUsers, setIsManageUsers] = useState(false);



    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }
    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboard",
            icon: <FiHome icon="home" className="icon-dual" />,
            link: "/dashboard",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            }
        },
        {
            label: "Admin",
            isHeader: true,
        },
        {
            id: "Category",
            label: "ManageCategory",
            icon: <FiLayers />,
            link: "/manage-category",
            stateVariables: isCategory,
            click: function (e) {
                e.preventDefault();
                setIsCategory(!isCategory);
                setIscurrentState('Category');
                updateIconSidebar(e);
            },
        },
        {
            id:"ManageUsers",
            label: "ManageUsers",
            icon: <FiUsers />,
            link: "/manage-users",
            stateVariables: isManageUsers,
            click: function (e) {
                e.preventDefault();
                setIsManageUsers(!isManageUsers);
                setIscurrentState('ManageUsers');
                updateIconSidebar(e);
            },
        }
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;










