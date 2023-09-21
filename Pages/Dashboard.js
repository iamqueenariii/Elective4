import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from "./../Assets/logo.jpg";
import header from "./../Assets/header.png";
import "./Dashboard.css";
import { Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Table from "../Component/Table";
import leaves from "./../Assets/leaves.png";
import zIndex from "@mui/material/styles/zIndex";
import Header from "../Component/Header";


export default function Dashboard (){
    const navigation = useNavigate()
    const handleCreate = () => {
        navigation('/Schedule')
    }
    const handleLogout = () => {
        navigation('/')
    }
    return (
        <div className="container-dashboard">
            <Header onClick={handleLogout}></Header>
            <div>
                <Button onClick={handleCreate} style={{backgroundColor:"white", fontWeight:'bold', color:'black',bottom:50,position:"absolute", marginLeft:"-54rem", zIndex:5}}> CREATE AN APPOINTMENT</Button>
            </div>
            <div className="Table">
            <div>
                <img className="leaves" src = {leaves}></img>
            </div>
                <Table></Table>
            </div>
        <div>

        </div>
        </div>
    )
}