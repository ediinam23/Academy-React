import React from "react";
import Table from "../table/Table.jsx";
import classes from "./ListAdministration.module.scss";
import AddButton from "../buttons/addButton/AddButton.jsx";
import Button from "../buttons/button/Button.jsx";
import {useModal} from "../../context/ModalContext.jsx";

const ListAdministration = ({title, header, data, changeData, FormComponent}) => {
    const {open, close} = useModal();

    const onDataChange = (type, formData) => {
        if(type === "delete"){
            const newData = data.filter(item => item?.id !== formData?.id)
            changeData(newData)
        }else if(type === "edit"){
            changeData(data.map(item => {
                if(item?.id === formData?.id){
                    return formData
                }else{
                    return item
                }
            }))
            closeForm()
        }else{
            const newData = [...data, {
                id: data?.length + 1,
                ...formData
            }]
            changeData(newData)
            closeForm()
        }
    }


    const actionsHeader = [
        {
            title: "Actions",
            index: null,
            render: (data) => {
                return <div className={classes["action-buttons"]}>
                    <Button label={"Edit"}
                            onClick={() => openForm(data)}/>
                    <Button label={"Delete"}
                            onClick={() => onDataChange("delete", data)}/>
                </div>
            }
        }
    ]

    const openForm = (data) => {
        open(title,
            <FormComponent key={JSON.stringify(data)} data={data}
                           onSubmit={(type, data) => onDataChange(type, data)}/>

        )
    }

    const closeForm = () => {
        close();
    }

    return <div className={`${classes["container"]} `}>
        <h5>{title}</h5>
        <AddButton onClick={openForm}
                    className={classes["add-button"]}/>
        <div>
            <Table header={[...header, ...actionsHeader]}
                   data={data}/>
        </div>
    </div>
}

export default ListAdministration;