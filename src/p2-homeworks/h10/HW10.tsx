import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { AppStoreType } from "./bll/store";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import preloader from "./assets/preloader.svg"
import s from "./style.module.css"

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout( () => dispatch(loadingAC(false)),3000)
    };

    return (
        <div className={s.HW10}>
            <hr/>
            homeworks 10

            {loading
                ? (
                    <img src={preloader} alt={""}/>
                ) : (
                    <div className={s.button}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
