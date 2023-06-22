import React from "react";
import Input from "../../../components/formFields/input/Input.jsx";

const PageTitleAdministration = ({value, changeValue}) => {
    return <div>
            <Input label="Page title"
                   placeholder="Insert page title"
                   value={value}
                   onChange={changeValue}
            />
    </div>
}

export default PageTitleAdministration;