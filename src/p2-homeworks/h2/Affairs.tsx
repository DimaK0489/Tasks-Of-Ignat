import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from "./Affairs.module.css"

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    };
    const setHigh = () => {
        props.setFilter("high")
    };
    const setMiddle = () => {
        props.setFilter("middle")
    };
    const setLow = () => {
        props.setFilter("low")
    };

    return (
        <div className={s.content}>

            {mappedAffairs}

            <button className={s.buttonFilter} onClick={setAll}>All</button>
            <button className={s.buttonFilter} onClick={setHigh}>High</button>
            <button className={s.buttonFilter} onClick={setMiddle}>Middle</button>
            <button className={s.buttonFilter} onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;
