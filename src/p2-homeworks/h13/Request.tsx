import React, {useState} from "react";
import {requestAPI} from "./RequestAPI";


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
            <button onClick={makeRequest}>Request</button>
            <br/>
            {request}
        </div>
    )
}

