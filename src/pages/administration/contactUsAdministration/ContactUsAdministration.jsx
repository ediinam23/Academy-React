import React from "react";
import Input from "../../../components/formFields/input/Input.jsx";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper.jsx";
import {useAppData} from "../../../context/AppContext.jsx";

const PageTitleAdministration = () => {
    const {pageData, dispatch} = useAppData();
    const {contactUs} = pageData;

    const handleDispatch = (property, value) => {
        dispatch({type: 'contact-us', data: value, property: property})
    }
    return <SectionWrapper title="Contact us">
        <Input label="Title"
               placeholder="Insert title of section"
               value={contactUs?.title}
               onChange={(value) => handleDispatch("title", value)}
        />
        <Input label="Short text"
               placeholder="Insert some short text"
               value={contactUs?.description}
               onChange={(value) => handleDispatch("description", value)}
        />
    </SectionWrapper>
}

export default PageTitleAdministration;