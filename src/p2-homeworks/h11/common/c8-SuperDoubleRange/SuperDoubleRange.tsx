import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number,
    max?: number,
    step?: number | null,
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value, onChangeRange,
        min,max,
        step, ...restProps
    }
) => {
    const handleChangeSlider = (event: ChangeEvent<{}>, value: number | number[]): void => {
        onChangeRange && onChangeRange(value as [number, number])
    }

    return (
        <>
            <div className='sliderHW11Style'>
                <Slider
                    value={value}
                    onChange={handleChangeSlider}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    step={step}
                />
            </div>
        </>
    );
}

export default SuperDoubleRange;
