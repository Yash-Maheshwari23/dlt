// import React from 'react'
// import './LeftBar.css'
// // const menuData = [
// //     {
// //       category: "DLT",
// //       items: [
// //         {
// //           category: "Home",
// //         },
// //         {
// //           category: "Manage Headers",
// //         },
// //         {
// //           category: "Manage Templates",
// //         },
// //         {
// //           category: "Manage Consent Templates",
// //         },
// //         {
// //           category: "Manage Digital Consent",
// //         },
// //         {
// //           category: "Manage Complaint",
// //         },
// //         {
// //           category: "Purchase Credit",
// //         },
// //         {
// //           category: "Consent View",
// //         }
// //       ]
// //     },
// //     {
// //       category: "CAMPAIGN SCHEDULE",
// //       items: [
// //         {
// //           category: "Traffic View"
// //         },
// //         {
// //           category: "Create Campaign"
// //         },
// //         {
// //           category: "View Campaign History",
// //         }
// //       ]
// //     },
// //     {
// //         category: "PROFILE",
// //         items: [
// //           {
// //             category: "Manage sub-users"
// //           },
// //           {
// //             category: "Update Profile"
// //           },
// //           {
// //             category: "contact-us",
// //           },
// //           {
// //             category: "change password",
// //           },
// //           {
// //             category: "logout",
// //           }
// //         ]
// //       }  
// //   ];


// const LeftBar = () => {
//   return (
//     <div >
//         <div className="welcome-txt">
//             <h6>Hello <span>saumya1@gmail.com</span></h6>
//         </div>
        
//     </div>
//   )
// }

// export default LeftBar


import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import './LeftBar.css'
const LeftBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // added styles
  const styles = {
    sideBarHeight: {
      // height: "65vh",
      //width: "250px",
      marginLeft:"0px",
      position:"fixed",
      marginTop:"40px",
      borderRadius:"10px",
    },
    menuIcon: {
      float: "right",
      margin: "10px"
    }
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
      
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
         
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        {/* <MenuItem icon={<FaGem />}> DLT</MenuItem>
        <MenuItem icon={<FaGem />}>Manage Templates</MenuItem> */}
        <SubMenu title="DLT" icon={<FaHeart />}>
          <MenuItem>Manage Headers</MenuItem>
          <MenuItem>Manage Template</MenuItem>
          <MenuItem>Manage Consent Template</MenuItem>
          <MenuItem>Manage Digital Consent</MenuItem>
          <MenuItem>Manage Complaint</MenuItem>
          <MenuItem>Purchase Credit</MenuItem>
          <MenuItem>Consent View</MenuItem>
        </SubMenu>
        <SubMenu title="Campaign Schedule" icon={<FaHeart />}>
          <MenuItem>Traffic View</MenuItem>
          <MenuItem>Create Campaign</MenuItem>
          <MenuItem>View Campaign History</MenuItem>
        </SubMenu>
        <SubMenu title="Profile" icon={<FaHeart />}>
          <MenuItem>Manage Sub-Users</MenuItem>
          <MenuItem>Update Profile</MenuItem>
          <MenuItem>Contact Us</MenuItem>
          <MenuItem>Change Password</MenuItem>
          <MenuItem>Logout</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default LeftBar;
