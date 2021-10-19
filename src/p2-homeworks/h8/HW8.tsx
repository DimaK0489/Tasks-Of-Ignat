import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./style.module.css"

export type InitialStateType = typeof initialPeople
const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState<InitialStateType>(initialPeople);

    const finalPeople = people.map(p => (
        <li key={p._id}>
            {p.name}
            {p.age}
        </li>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <>
            <hr/>
            homeworks 8
            <div className={s.container}>
                {finalPeople}
            </div>

            <div className={s.buttons}><SuperButton onClick={sortUp}> Sort Up </SuperButton></div>
            <div className={s.buttons}><SuperButton onClick={sortDown}> Sort Down </SuperButton></div>
            <div className={s.buttons}><SuperButton onClick={sortAge}> Sort Age </SuperButton></div>

        </>
    );
}

export default HW8;
