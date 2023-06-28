import React, {useState} from "react";
import Table from "../table/Table.jsx";
import classes from "./ListAdministration.module.scss";
import AddButton from "../buttons/addButton/AddButton.jsx";
import Button from "../buttons/button/Button.jsx";

const ListAdministration = ({title, header, data, changeData, FormComponent}) => {
    const [displayForm, setDisplayForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openForm = (data) => {
        setSelectedItem(data);
        setDisplayForm(true);
    }

    const closeForm = () => {
        setSelectedItem(null);
        setDisplayForm(false)
    }

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

    return <div className={`${classes["container"]} ${displayForm ? classes["is-form-open"] : ""}`}>
        <h5>{title}</h5>
        <AddButton onClick={openForm}
                    className={classes["add-button"]}/>
        <div>
            <Table header={[...header, ...actionsHeader]}
                   data={data}/>
            {displayForm &&
                <div className={classes["form-container"]}>
                    <Button label={"Close"}
                            className={classes["close-button"]}
                            onClick={() => closeForm()}/>
                    <FormComponent data={selectedItem}
                                   onSubmit={(type, data) => onDataChange(type, data)}/>
                </div>
            }

        </div>
    </div>
}

export default ListAdministration;