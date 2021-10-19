import React, {useState} from "react";
import {requestAPI} from "./RequestAPI";
import s from './HW13.module.css'

export const Request = () => {

    const [checkboxStatus, setCheckboxStatus] = useState(false)
    const [request, setRequest] = useState("Make a Request")

    const sendRequestRes = (checkboxStatus: boolean) => {
        requestAPI.post(checkboxStatus)
            .then((data) => {
                    setRequest(data)
                }
            )
    }

    const changeCheckboxStatus = () => setCheckboxStatus(!checkboxStatus)
    const makeRequest = () => sendRequestRes(checkboxStatus)
    return (
        <div>
            <input type="checkbox" onClick={changeCheckboxStatus}/> Change status <br/>
            <button className={s.button} onClick={makeRequest}>Request</button>
            <br/>
            <span className={s.request}>{request}</span>
        </div>
    )
}

