import React from "react";
import s from "./Message.module.css"

type MessageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

type MessageTypeProps = {
    messageData: MessageDataType
}

function Message (props: MessageTypeProps) {
    return (
        <div className={s.message}>
            <img className={s.img} src={props.messageData.avatar} alt={"Текст"}/>
            <div className={s.content}>
                <div className={s.name}>{props.messageData.name}</div>
                <div className={s.messages}>{props.messageData.message}</div>
                <div className={s.time}>{props.messageData.time}</div>
            </div>
            <div className={s.clear}></div>
        </div>

    );
}

export default Message;
