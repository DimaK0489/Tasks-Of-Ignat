import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");

    const error = text ? "" : "error";
    const showAlert = () => {
        if (error) {
            alert("Enter text...");
        } else {
            alert(text);
        }
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    className={s.blue} // смешивание классов
                />
                <SuperButton
                    red
                    onClick={showAlert}
                >
                    delete
                </SuperButton>

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                    <SuperCheckbox
                        checked={checked}
                        onChange={testOnChange}/>
                </SuperCheckbox>

            </div>
        </div>
    );
}

export default HW4;
