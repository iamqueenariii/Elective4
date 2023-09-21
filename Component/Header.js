import React from "react";
import "./../Pages/Dashboard.css";
import logo from "./../Assets/logo.jpg";
import header from "./../Assets/header.png";
import { Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function Header ({onClick}) {
    return(
            <div className="dashboard-header"> 
                <div><img className="header" src = {header}></img></div>
                <div className="logooo-dashboard"><img className="logooo" src = {logo}></img></div>
                <div className="Titleee"><h1 style={{color:'white'}}> APPOINTMENT SCHEDULE</h1></div>
                <div className="schedule-button"> 
                    <Button onClick={onClick} style={{color:"white", fontWeight:"lighter",fontSize:15, display:"flex"}}> 
                        LOGOUT
                        <AccountCircle style={{color:"white"}}></AccountCircle>
                    </Button>   
                </div>
            </div>
    )
}