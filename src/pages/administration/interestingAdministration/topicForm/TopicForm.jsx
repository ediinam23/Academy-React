import React, {useEffect} from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputWithController from "../../../../components/formFields/inputWithController/InputWithController.jsx";
import SubmitButton from "../../../../components/buttons/submitButton/SubmitButton.jsx";
import classes from "./TopicForm.module.scss";
import TextareaWithController
    from "../../../../components/formFields/textareaWithController/TextareaWithController.jsx";
import ImageUploadWithController
    from "../../../../components/formFields/imageUploadWithController/ImageUploadWithController.jsx";

const TopicForm = ({data, onSubmit}) => {
    const schema = yup.object().shape({
        title: yup.string().trim()
            .required("Field required!")
            .min(3, "Minimum length is 3!")
            .max(50, "Maximum length is 50!"),
        description: yup.string().trim()
            .required("Field required!")
            .min(3, "Minimum length is 3!")
            .max(255, "Maximum length is 255!"),
        alt: yup.string().trim()
            .required("Field required!")
            .min(3, "Minimum length is 3!")
            .max(50, "Maximum length is 50!"),
        image: yup.string().required("Field is required!")
    })

    const { handleSubmit, control, reset, formState: {errors}
    } = useForm({resolver: yupResolver(schema)});

    const onSave = (formData) => {
        onSubmit(data?.id ? "edit" : "add", formData)
    }

    useEffect(() => {
        reset(data)
    }, [JSON.stringify(data)])

    console.log(errors)

    return <form className={classes["form"]} onSubmit={handleSubmit(onSave)}>
        <h5>{data?.id ? "Edit topic" : "Add topic"}</h5>
        <InputWithController label="Title"
                             placeholder="Insert title of topic"
                             name="title"
                             control={control}
                             error={errors?.title?.message}

        />
        <TextareaWithController label="Description"
                                placeholder="Insert description of topic"
                                name="description"
                                control={control}
                                error={errors?.description?.message}
        />
        <InputWithController label="Image alt text"
                             placeholder="Insert alternative text for image"
                             name="alt"
                             control={control}
                             error={errors?.alt?.message}
        />
        <ImageUploadWithController label={"Image"}
                                   name={"image"}
                                   control={control}
                                   error={errors?.image?.message}
        />
        <SubmitButton className={classes["submit-button"]}
                      label={"Save"}/>
    </form>
}

export default TopicForm;