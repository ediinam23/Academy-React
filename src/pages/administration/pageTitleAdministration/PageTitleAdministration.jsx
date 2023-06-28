import React from "react";
import Input from "../../../components/formFields/input/Input.jsx";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper.jsx";
import {useAppData} from "../../../context/AppContext.jsx";

const PageTitleAdministration = () => {
    const {pageData, dispatch} = useAppData();
    const {pageTitle} = pageData;

    return <SectionWrapper title="Page title">
            <Input label="Page title"
                   placeholder="Insert page title"
                   value={pageTitle}
                   onChange={(value) => dispatch({type: 'page-title', data: value})}
            />
    </SectionWrapper>
}

export default PageTitleAdministration;