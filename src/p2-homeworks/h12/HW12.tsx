import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeStateType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

//export const themes: string[] = ['dark', 'red', 'some', "blue"];

export function HW12() {

    const state = useSelector<AppStoreType, ThemeStateType>(state=>state.theme);
    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[state.theme]}>
            <hr/>
            <span className={s[state.theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                options={state.themes}
                value={state.theme}
                onChangeOption={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
