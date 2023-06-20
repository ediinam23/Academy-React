import React from "react";

const Input = ({
    label = "",
    placeholder = "",
    value = "",
    onChange = () => {}
               }) => {
    return <div>
        {label && label?.length > 0 && <label>{label}</label>}
        <input type="text"
               value={value}
               placeholder={placeholder}
               onChange={(e) => {
                   onChange(e?.target?.value)
               }
               }
        />
    </div>
}

export default Input;