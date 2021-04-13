import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import style from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        }
    }

    return (
        <div className={style.hw11}>

            <div className={style.superRange}>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div>

                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeRange}
                    step={2}
                />
                <div className={style.values}>
                    <span>{value1}</span>
                    <span>{value2}</span>
                </div>
            </div>

        </div>
    );
}

export default HW11;
