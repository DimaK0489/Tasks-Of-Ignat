import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import "./style.css"
import s from '../h4/common/c2-SuperButton/SuperButton.module.css'

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        const restoreValue = restoreState("editable-span-value", "");
        setValue(restoreValue)
    };

    return (
        <>
            <hr/>
            homeworks 6
            <div className={'container'}>
                <div className={"wrapper-hw6"}>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : "Double click"}}
                    />
                </div>
                <div className={"button-hw6"}>
                    <SuperButton className={s.defaultButton} onClick={save}>save</SuperButton>
                    <SuperButton className={s.defaultButton} onClick={restore}>restore</SuperButton>
                </div>
            </div>
        </>
    );
}

export default HW6;
