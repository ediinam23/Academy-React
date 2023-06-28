import React from "react";
import Input from "../../../components/formFields/input/Input.jsx";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper.jsx";

const PageTitleAdministration = ({value, changeValue}) => {
    return <SectionWrapper title="Page title">
            <Input label="Page title"
                   placeholder="Insert page title"
                   value={value}
                   onChange={changeValue}
            />
    </SectionWrapper>
}

export default PageTitleAdministration;