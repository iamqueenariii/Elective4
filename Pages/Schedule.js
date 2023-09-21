import React from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../Component/Header";
import "./Schedule.css";
import InputFields from "../Component/InputFields";
import { Button } from "@mui/material";
import { NextPlan, SettingsBackupRestore } from "@mui/icons-material";

export default function Schedule (){
    const navigation = useNavigate()
    const handleNext = ()=> {
        navigation('/Dashboard')
    }
    const handleLogout = () => {
        navigation('/')
    }
    return (
        <div className="container-schedule">
            <Header onClick={handleLogout}></Header>
            <div className="container-input">
            <div className="margin">
                <InputFields title={"Customer's Name:"}></InputFields>
            </div>
            <div className="margin">
                <InputFields title={"Service/s:"}></InputFields>
            </div>
            <div className="margin">
                <InputFields title={"Preferred Time:"}></InputFields>
            </div>
            <div className="margin">
                <InputFields title={"Customer's Number:"}></InputFields>
            </div>
            </div>
            <div className="btn-back">
            <Button onClick = {handleNext} style={{color:"white", fontWeight:"lighter",fontSize:15, marginTop:"25rem"}}> 
                <SettingsBackupRestore style={{color:"white"}}></SettingsBackupRestore>
                BACK
            </Button>
            </div>
            <div className="schedule-button">    
            <Button onClick = {handleNext} style={{color:"white", fontWeight:"lighter",fontSize:15, marginTop:"25rem"}}> 
                CONTINUE
                <NextPlan style={{color:"white"}}></NextPlan>
            </Button>   
            </div>
        </div>
    )
}