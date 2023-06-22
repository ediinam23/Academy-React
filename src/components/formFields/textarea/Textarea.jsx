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
               placeholder={placeholder}
               onChange={(e) => {
                   onChange(e?.target?.value)
               }
               }
               rows="4" cols="50"
        >{value}</textarea>
    </div>
}

export default Textarea;