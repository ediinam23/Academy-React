import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ValidationTestThree = () => {
    const schema = yup.object({
        exampleTwo: yup.string().required("Field is required!")
            .min(2, "Field cannot be less than 2 characters long!")
            .max(3, "Field cannot be more than 3 characters long!")
            .matches(/abc/, "Field invalid!")
    })

    const {
        reset,
        setValue,
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            exampleOne: "Default value",
            exampleTwo: "abc"
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => console.log(data)

    const logErrors = () => console.log(errors)

    return <div style={{paddingTop: "100px", paddingLeft: "16px", paddingRight: "16px"}}>
        <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", gap: "16px"}}>
            <input {...register("exampleOne")}/>
            <input {...register("exampleTwo")}/>
            {errors?.exampleTwo && <span>{errors?.exampleTwo?.message}</span>}
            <div>Value of second field is: {watch("exampleTwo")}</div>
            <button onClick={() => logErrors()}>Log errors</button>
            <button onClick={() => setValue("exampleOne", "Example set!")}>Set value of first field to "Example set!"</button>
            <button onClick={() => reset()}>Reset form to default values</button>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default ValidationTestThree;
