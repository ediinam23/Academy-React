import React from "react";
import Textarea from "../../../components/formFields/textarea/Textarea.jsx";
import Input from "../../../components/formFields/input/Input";
import ImageUpload from "../../../components/formFields/imageUpload/ImageUpload.jsx";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper.jsx";
import {useAppData} from "../../../context/AppContext.jsx";


// I - cijeli objekat
// II - (property, value)
const IntroductionAdministration = () => {
    const {pageData, dispatch} = useAppData();
    const {introduction} = pageData;

    const handleDispatch = (property, value) => {
        dispatch({type: 'introduction', data: value, property: property})
    }

    return <SectionWrapper title="Introduction section">
        <Textarea label="Description"
                  placeholder="Insert some text"
                value={introduction?.description}
                  onChange={(value) => handleDispatch("description", value)}
        />
        <Input label="Image alt text"
               placeholder="Insert alternative text for image"
                value={introduction?.altText}
                  onChange={(value) => handleDispatch("altText", value)}
        />
        <ImageUpload label={"Introduction image"}
                     onChange={(value) => handleDispatch("image", value)}
                />
    </SectionWrapper>
}

export default IntroductionAdministration;