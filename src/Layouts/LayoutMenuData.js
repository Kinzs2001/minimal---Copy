import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Import Icons
import { FiLayers } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isCategory, setIsCategory] = useState(false);
    const [isManageUsers, setIsManageUsers] = useState(false);
    // const [isCategory, setIsisCategory] = useState(false);



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

    // useEffect(() => {
    //     document.body.classList.remove('twocolumn-panel');

    //     if (iscurrentState !== 'Auth') {
    //         setIsAuth(false);
    //     }

    //     if (iscurrentState !== 'BaseUi') {
    //         setIsBaseUi(false);
    //     }
    //     if (iscurrentState !== 'AdvanceUi') {
    //         setIsAdvanceUi(false);
    //     }

    //     if (iscurrentState !== 'Icons') {
    //         setIsIcons(false);
    //     }

    //     if (iscurrentState !== 'MuliLevel') {
    //         setIsMultiLevel(false);
    //     }
    //     if (iscurrentState === 'Widgets') {
    //         history("/widgets");
    //         document.body.classList.add('twocolumn-panel');
    //     }
    // }, [
    //     history,
    //     iscurrentState,
    //     isDashboard,
    //     isAuth,
    //     isBaseUi,
    //     isAdvanceUi,
    //     isIcons,
    //     isMaps,
    //     isMultiLevel
    // ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: <FiHome icon="home" className="icon-dual" />,
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                // {
                //     id: "analytics",
                //     label: "Analytics",
                //     link: "/dashboard-analytics",
                //     parentId: "dashboard",
                // },
                // {
                //     id: "crm",
                //     label: "CRM",
                //     link: "/dashboard-crm",
                //     parentId: "dashboard",
                // },

            ],
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
        // {
        //     id: "Authentication",
        //     label: "Authentication",
        //     icon: <FeatherIcon icon="users" className="icon-dual" />,
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsAuth(!isAuth);
        //         setIscurrentState('Auth');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isAuth,
        //     subItems: [
        //         {
        //             id: "signIn",
        //             label: "Sign In",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsSignIn(!isSignIn);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isSignIn,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-signin-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-signin-cover" },
        //             ]
        //         },
        //         {
        //             id: "signUp",
        //             label: "Sign Up",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsSignUp(!isSignUp);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isSignUp,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-signup-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-signup-cover" },
        //             ]
        //         },
        //     ],
        // },

        // {
        //     id: "landing",
        //     label: "Landing",
        //     icon: <i className="ri-rocket-line" />,
        //     link: "/#",
        //     stateVariables: isLanding,
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsLanding(!isLanding);
        //         setIscurrentState('Landing');
        //         updateIconSidebar(e);
        //     },
        //     subItems: [
        //         { id: "onePage", label: "One Page", link: "/landing", parentId: "landing" },
        //         { id: "nftLanding", label: "NFT Landing", link: "/nft-landing", parentId: "landing" },
        //         { id: "Job", label: "Job", link: "/jobs-landing", parentId: "landing", badgeColor: "success", badgeName: "New" },
        //     ],
        // },
        // {
        //     label: "Components",
        //     isHeader: true,
        // },

        // {
        //     id: "widgets",
        //     label: "Widgets",
        //     icon: <FeatherIcon icon="copy" className="icon-dual" />,
        //     link: "/widgets",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIscurrentState('Widgets');
        //     }
        // },

        // {
        //     id: "icons",
        //     label: "Icons",
        //     icon: <FeatherIcon icon="archive" className="icon-dual" />,
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsIcons(!isIcons);
        //         setIscurrentState('Icons');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isIcons,
        //     subItems: [
        //         { id: "remix", label: "Remix", link: "/icons-remix", parentId: "icons" },
        //         { id: "boxicons", label: "Boxicons", link: "/icons-boxicons", parentId: "icons" },
        //         { id: "materialdesign", label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
        //         { id: "lineawesome", label: "Line Awesome", link: "/icons-lineawesome", parentId: "icons" },
        //         { id: "feather", label: "Feather", link: "/icons-feather", parentId: "icons" },
        //         { id: "crypto", label: "Crypto SVG", link: "/icons-crypto", parentId: "icons" },
        //     ],
        // },
        // {
        //     id: "maps",
        //     label: "Maps",
        //     icon: <FeatherIcon icon="map-pin" className="icon-dual" />,
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsMaps(!isMaps);
        //         setIscurrentState('Maps');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isMaps,
        //     subItems: [
        //         { id: "google", label: "Google", link: "/maps-google", parentId: "maps" },
        //         { id: "vector", label: "Vector", link: "/maps-vector", parentId: "maps" },
        //         { id: "leaflet", label: "Leaflet", link: "/maps-leaflet", parentId: "maps" },
        //     ],
        // },
        // {
        //     id: "multilevel",
        //     label: "Multi Level",
        //     icon: <FeatherIcon icon="share-2" className="icon-dual" />,
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsMultiLevel(!isMultiLevel);
        //         setIscurrentState('MuliLevel');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isMultiLevel,
        //     subItems: [
        //         { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
        //         {
        //             id: "level1.2",
        //             label: "Level 1.2",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsLevel1(!isLevel1);
        //             },
        //             stateVariables: isLevel1,
        //             childItems: [
        //                 { id: 1, label: "Level 2.1", link: "/#" },
        //                 {
        //                     id: "level2.2",
        //                     label: "Level 2.2",
        //                     link: "/#",
        //                     isChildItem: true,
        //                     click: function (e) {
        //                         e.preventDefault();
        //                         setIsLevel2(!isLevel2);
        //                     },
        //                     stateVariables: isLevel2,
        //                     childItems: [
        //                         { id: 1, label: "Level 3.1", link: "/#" },
        //                         { id: 2, label: "Level 3.2", link: "/#" },
        //                     ]
        //                 },
        //             ]
        //         },
        //     ],
        // },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;















// link: "/auth-pass-reset-basic"
// link: "/auth-pass-reset-cover"
// link: "/auth-pass-change-basic
// link: "/auth-pass-change-cover
// link: "/auth-lockscreen-basic"
// link: "/auth-lockscreen-cover"
// link: "/auth-logout-basic" },

// link: "/auth-logout-cover" },

// link: "/auth-success-msg-basic
// link: "/auth-success-msg-cover
// link: "/auth-twostep-basic" },
// link: "/auth-twostep-cover" },