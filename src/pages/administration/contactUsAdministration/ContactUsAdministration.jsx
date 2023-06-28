import React from "react";
import Input from "../../../components/formFields/input/Input.jsx";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper.jsx";

const PageTitleAdministration = ({data, changeData}) => {
    return <SectionWrapper title="Contact us">
        <Input label="Title"
               placeholder="Insert title of section"
               value={data?.title}
               onChange={(value) => changeData("title", value)}
        />
        <Input label="Short text"
               placeholder="Insert some short text"
               value={data?.description}
               onChange={(value) => changeData("description", value)}
        />
    </SectionWrapper>
}

export default PageTitleAdministration;