import React from "react";
import classes from "./Textarea.module.scss";

const Textarea = ({
    label = "",
    placeholder = "",
    value = "",
    onChange = () => {}
               }) => {
    return <div className={classes["container"]}>
        {label && label?.length > 0 && <label>{label}</label>}
        <textarea
            defaultValue={value}
               placeholder={placeholder}
               onChange={(e) => {
                   onChange(e?.target?.value)
               }
               }
               rows="4" cols="50"
        />
    </div>
}

export default Textarea;