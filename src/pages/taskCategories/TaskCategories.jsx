import React, {useState} from "react";
import Table from "../../components/table/Table.jsx";
import classes from "./TaskCategories.module.scss";
import AddButton from "../../components/buttons/addButton/AddButton.jsx";
import Button from "../../components/buttons/button/Button.jsx";
import {useModal} from "../../context/ModalContext.jsx";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {taskCategoryService} from "../../services/TaskCategoryService.js";
import TaskCategoryForm from "./taskCategoryForm/TaskCategoryForm.jsx";
import SearchField from "../../components/search/Search.jsx";
import {message} from "antd";
import withAuth from "../authHOC/authHOC.jsx";

const TaskCategories = () => {
    const queryClient = useQueryClient();
    const {open, close} = useModal();
    const [query, setQuery] = useState("")

    console.log(query)

    const {data} = useQuery(['categories', query],
        () => taskCategoryService.getAll(query), {
            enabled: true,
            initialData: []
        })

    const deleteCategory = useMutation((data) => taskCategoryService.delete(data)
        .then(r => {
            message.success("Succesfully deleted!");
            queryClient.invalidateQueries("categories")
            close()
        })
        .catch(err => {
            console.log(err?.response?.data)
            message.error("There has been an error!")
        }))

    const onDelete = (id) => {
        deleteCategory.mutate(id)
    }

    const header = [
        {
            title: "Name",
            index: "name"
        },
        {
            title: "Code",
            index: "code"
        },
        {
            title: "Color",
            index: "color"
        },
        {
            title: "Actions",
            index: null,
            render: (data) => {
                return <div className={classes["action-buttons"]}>
                    <Button label={"Edit"}
                            onClick={() => openForm(data?.id)}/>
                    <Button label={"Delete"}
                            onClick={() => onDelete(data?.id)}/>
                </div>
            }
        }
    ]

    const closeForm = () => {
        close();
    }

    const openForm = (id) => {
        open("Task category",
            <TaskCategoryForm key={`category-${id}`}
                              id={id}
                              close={closeForm}/>

        )
    }

    return <div className={`${classes["container"]} `}>
        <h5>Task categories</h5>
        <div className={classes["actions-container"]}>
        <SearchField className={classes['search']}
                     placeholder={"Insert term for search"}
                     onSearch={(e) => {
                        setQuery(e)
                    }}/>
        <AddButton onClick={() => openForm(null)}
                   className={classes["add-button"]}/>
        </div>
        <div className={classes["table-container"]}>
            <Table header={header}
                   data={data}/>
        </div>
    </div>
}

export default withAuth(TaskCategories);