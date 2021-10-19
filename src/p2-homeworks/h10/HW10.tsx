import React from "react";
import {AppStoreType} from "./bll/store";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import preloader from "./assets/preloader.svg"
import s from "./style.module.css"

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 3000)
    };

    return (
        <>
            <hr/>
            homeworks 10
            <div className={s.HW10}>
                {loading
                    ? (
                        <img src={preloader} alt={""}/>
                    ) : (
                        <button className={s.button} onClick={setLoading}>Set loading...</button>
                    )
                }
            </div>
        </>
    );
}

export default HW10;
