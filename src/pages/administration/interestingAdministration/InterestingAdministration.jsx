import React from "react";
import Input from "../../../components/formFields/input/Input";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper.jsx";
import ListAdministration from "../../../components/listAdministration/ListAdministration.jsx";
import TopicForm from "./topicForm/TopicForm.jsx";
import {useAppData} from "../../../context/AppContext.jsx";


// title, items
const InterestingAdministration = () => {
    const {pageData, dispatch} = useAppData();
    const {interesting} = pageData;

    const header = [
        {
            title: "Title",
            index: "title"
        },
        {
            title: "Description",
            index: "description"
        },
        {
            title: "Image alt text",
            index: "alt"
        }
    ]

    const handleDispatch = (property, value) => {
        dispatch({type: 'interesting', data: value, property: property})
    }

    return <SectionWrapper title="Interesting section">
        <Input label="Section title"
               placeholder="Insert title of section"
               value={interesting?.title}
               onChange={(value) => handleDispatch("title", value)}
        />
        <ListAdministration title={"Topics list"}
                            header={header}
                            data={interesting?.items}
                            changeData={(value) => handleDispatch("items", value)}
                            FormComponent={TopicForm}/>
    </SectionWrapper>
}

export default InterestingAdministration;