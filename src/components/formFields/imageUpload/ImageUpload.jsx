import React from "react";
import classes from "./ImageUpload.module.scss"

const ImageUpload = ({label = "", onChange = () => {}}) => {

    const handleUpload = (e) => {
        console.log(e?.target?.files)
        const uploadedFile = e?.target?.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            onChange(reader.result)
        }

        if(uploadedFile){
            reader.readAsDataURL(uploadedFile)
        }
    }

    return <div className={classes["container"]}>
        {label && label?.length > 0 && <label>{label}</label>}
        <input type="file"
               onChange={(e) => {
                   handleUpload(e)
               }
               }
        />
    </div>
}

export default ImageUpload;