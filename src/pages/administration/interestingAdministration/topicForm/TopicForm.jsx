import React, {useEffect, useState} from "react";
import Input from "../../../../components/formFields/input/Input.jsx";
import ImageUpload from "../../../../components/formFields/imageUpload/ImageUpload.jsx";
import Textarea from "../../../../components/formFields/textarea/Textarea.jsx";
import SubmitButton from "../../../../components/buttons/submitButton/SubmitButton.jsx";
import classes from "./TopicForm.module.scss";

const TopicForm = ({data, onSubmit}) => {
    const [formData, setFormData] = useState(null);

    const changeProperty = (property, value) => setFormData(prevState => ({
        ...prevState,
        [property]: value
    }))

    const onSave = () => {
        onSubmit(data?.id ? "edit" : "add", formData)
    }

    useEffect(() => {
        setFormData(data)
    }, [JSON.stringify(data)])

    return <form className={classes["form"]}>
        <h5>{data?.id ? "Edit topic" : "Add topic"}</h5>
        <Input label="Title"
               placeholder="Insert title of topic"
               value={formData?.title}
               onChange={(value) => changeProperty("title", value)}
        />
        <Textarea label="Description"
                  placeholder="Insert description of topic"
               value={formData?.description}
               onChange={(value) => changeProperty("description", value)}
        />
        <Input label="Image alt text"
               placeholder="Insert alternative text for image"
               value={formData?.alt}
               onChange={(value) => changeProperty("alt", value)}
        />
        <ImageUpload label={"Image"}
                     onChange={(value) => changeProperty("image", value)}
        />
        <SubmitButton className={classes["submit-button"]}
                      label={"Save"}
                      onClick={() => onSave()}/>
    </form>
}

export default TopicForm;