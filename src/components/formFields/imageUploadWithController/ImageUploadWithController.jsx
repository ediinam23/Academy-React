import React from "react";
import classes from "./ImageUploadWithController.module.scss"
import {Controller} from "react-hook-form";

const ImageUploadWithController = ({
                                       label = "",
                                       name,
                                       control,
                                       error
}) => {

    return <div className={classes["container"]}>
        {label && label?.length > 0 && <label>{label}</label>}
        {control &&
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input type="file"
                           onChange={(e) => {
                               const uploadedFile = e?.target?.files[0];
                               const reader = new FileReader();

                               reader.onload = () => {
                                   field.onChange(reader.result);
                               };

                               if (uploadedFile) {
                                   reader.readAsDataURL(uploadedFile);
                               }
                           }}
                    />
                )}
            />
        }
        {error && error?.length > 0 && <span>{error}</span>}
    </div>
}

export default ImageUploadWithController;