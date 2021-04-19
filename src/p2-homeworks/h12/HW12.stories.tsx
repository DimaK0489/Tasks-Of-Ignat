import React from "react";
import HW12 from "./HW12";
import {Provider} from "react-redux";
import store from "../h10/bll/store";

export default {
    title: "HomeWork 12",
    component: HW12
}
export const BaseExample = () => <Provider store={store}> <HW12/></Provider>