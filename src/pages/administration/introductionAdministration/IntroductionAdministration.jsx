import React from "react";
import Textarea from "../../../components/formFields/textarea/Textarea.jsx";
import Input from "../../../components/formFields/input/Input";
import ImageUpload from "../../../components/formFields/imageUpload/ImageUpload.jsx";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper.jsx";


// I - cijeli objekat
// II - (property, value)
const IntroductionAdministration = ({data, changeData}) => {
    return <SectionWrapper title="Introduction section">
        <Textarea label="Description"
                value={data?.description}
                  onChange={(value) => changeData("description", value)}
        />
        <Input label="Image alt text"
                value={data?.altText}
                  onChange={(value) => changeData("altText", value)}
        />
        <ImageUpload label={"Introduction image"}
                     onChange={(value) => changeData("image", value)}
                />
    </SectionWrapper>
}

export default IntroductionAdministration;