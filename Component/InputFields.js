import React from "react";
import "./../Pages/Schedule.css"
export default function InputFields({title}) {
    return (
        <div className="inputField">
            <div className="titleSpace">
                <h3>{title}</h3>
            </div>
            <div className="inputSpace">
            <input className="typeinput"></input>
            </div>
        </div>
    )
}