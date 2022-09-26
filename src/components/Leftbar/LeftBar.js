import React from 'react'
import './LeftBar.css'
import Menubar from '../Menubar/Menubar';
const menuData = [
    {
      category: "DLT",
      items: [
        {
          category: "Home",
        },
        {
          category: "Manage Headers",
        },
        {
          category: "Manage Templates",
        },
        {
          category: "Manage Consent Templates",
        },
        {
          category: "Manage Digital Consent",
        },
        {
          category: "Manage Complaint",
        },
        {
          category: "Purchase Credit",
        },
        {
          category: "Consent View",
        }
      ]
    },
    {
      category: "CAMPAIGN SCHEDULE",
      items: [
        {
          category: "Traffic View"
        },
        {
          category: "Create Campaign"
        },
        {
          category: "View Campaign History",
        }
      ]
    },
    {
        category: "PROFILE",
        items: [
          {
            category: "Manage sub-users"
          },
          {
            category: "Update Profile"
          },
          {
            category: "contact-us",
          },
          {
            category: "change password",
          },
          {
            category: "logout",
          }
        ]
      }  
  ];


const LeftBar = () => {
  return (
    <div>
        <div className="welcome-txt">
            <h6>Hello <span>saumya1@gmail.com</span></h6>
        </div>
        <Menubar title="menubar" data={menuData}/>
    </div>
  )
}

export default LeftBar
