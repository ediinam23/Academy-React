import React from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import classes from "./TaskCategoryForm.module.scss";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {taskCategoryService} from "../../../services/TaskCategoryService.js";
import {message} from 'antd';
import InputWithController from "../../../components/formFields/inputWithController/InputWithController.jsx";
import SubmitButton from "../../../components/buttons/submitButton/SubmitButton.jsx";
const TaskCategoryForm = ({id, close}) => {
    const queryClient = useQueryClient();

    const add = useMutation((data) => taskCategoryService.add(data)
        .then(r => {
            message.success("Succesfully added!");
            queryClient.invalidateQueries("categories")
            close()
        })
        .catch(err => {
            console.log(err?.response?.data)
            message.error("There has been an error!")
        }))

    const edit = useMutation((data) => taskCategoryService.edit(data)
        .then(r => {
            message.success("Sucessfully edited!");
            queryClient.invalidateQueries("categories")
            close()
        })
        .catch(err => {
            console.log(err?.response?.data)
            message.error("There has been an error!")
        }))

    const get = (id) => {
        return taskCategoryService.get(id)
            .then(res => {
                reset(res)
            })
            .catch(err => message.error("There has been an error!"))
    }

    const schema = yup.object().shape({
        name: yup.string().trim()
            .required("Field required!")
            .min(2, "Minimum length is 2!")
            .max(50, "Maximum length is 50!"),
        code: yup.string().trim()
            .required("Field required!")
            .min(8, "Field must be 8 characters long!")
            .max(8, "Field must be 8 characters long!"),
        color: yup.string()
            .required("Field required!")
    })

    const { handleSubmit, control, reset, formState: {errors}
    } = useForm({resolver: yupResolver(schema)});

    const onSave = (formData) => {
            if(id){
                edit.mutate(formData)
            }else{
                add.mutate(formData)
            }
    }

    useQuery(['category-single', id], () => get(id), {
        enabled: Boolean(id)
    })

    console.log(errors)

    return <form className={classes["form"]} onSubmit={handleSubmit(onSave)}>
        <h5>{id ? "Edit task category" : "Add task category"}</h5>
        <InputWithController label="Name"
                             placeholder="Insert name of category"
                             name="name"
                             control={control}
                             error={errors?.name?.message}
        />
        <InputWithController label="Code"
                             placeholder="Insert code"
                             name="code"
                             control={control}
                             error={errors?.code?.message}
        />
        <InputWithController label="Color"
                             placeholder="Insert color"
                             name="color"
                             control={control}
                             error={errors?.color?.message}
        />
        <SubmitButton className={classes["submit-button"]}
                      label={"Save"}/>
    </form>
}

export default TaskCategoryForm;