import React from "react";
import Input from "../../../components/formFields/input/Input";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper.jsx";
import ListAdministration from "../../../components/listAdministration/ListAdministration.jsx";
import TopicForm from "./topicForm/TopicForm.jsx";


// title, items
const InterestingAdministration = ({data, changeData}) => {
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

    return <SectionWrapper title="Interesting section">
        <Input label="Section title"
               placeholder="Insert title of section"
               value={data?.title}
               onChange={(value) => changeData("title", value)}
        />
        <ListAdministration title={"Topics list"}
                            header={header}
                            data={data?.items}
                            changeData={(value) => changeData("items", value)}
                            FormComponent={TopicForm}/>
    </SectionWrapper>
}

export default InterestingAdministration;