import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from "react";
import SuperInputText from "../../../h4/common/c1-SuperInputText/SuperInputText";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

type SuperEditableSpanType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    spanProps?: DefaultSpanPropsType // пропсы для спана
};

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus,
        onBlur,
        onEnter,
        spanProps,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {};

    const onEnterCallback = () => {
        setEditMode(!editMode); // выключить editMode при нажатии Enter
        onEnter && onEnter();
    };
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(!editMode); // выключить editMode при нажатии за пределами инпута

        onBlur && onBlur(e);
    };
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(!editMode); // включить editMode при двойном клике
        onDoubleClick && onDoubleClick(e);
    };

    const spanClassName = `input-hw6`;

    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        {...restProps}
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}
                        {...restSpanProps}
                    >
                        {children || restProps.value}
                    </span>
                )
            }
        </>
    );
}

export default SuperEditableSpan;
