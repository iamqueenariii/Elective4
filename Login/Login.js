import React from "react";
import { useNavigate } from "react-router-dom";
import "./logins.css"
import header from "./../Assets/header.png";
import logo from "./../Assets/logo.jpg"
import { Button } from "@mui/material";
import { NextPlan } from "@mui/icons-material";

export default function Login (){
    const navigation = useNavigate()
    const handleLogin = () => {
        navigation("/Dashboard")
    }
    
    return (
        <div className="header-login">
            <div className="container-header"> 
                <div><img className="header" src = {header}></img></div>
                <div className="logoo-container"><img className="logoo" src = {logo}></img></div>
            </div>
            <div className="container-username"> 
                <h1 className="title">
                    USERNAME:
                </h1>
                <input className="type"></input>
                <h1 className="title">
                    PASSWORD:
                </h1>
                <input className= "type" type="password"></input>
            </div>
            <div className="container-passwrord"></div>
            <div className="dashboard-button"> 
            <Button onClick = {handleLogin} style={{color:"white", fontWeight:"lighter",fontSize:15}}> 
                LOGIN
                <NextPlan style={{color:"white"}}></NextPlan>
            </Button>   
            </div>
        </div>
    )
}