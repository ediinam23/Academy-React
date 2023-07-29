import React from "react";
import { useForm } from "react-hook-form";

const ValidationTestOne = () => {
    const {
        reset,
        setValue,
        register,
        handleSubmit,
        watch
    } = useForm({
        defaultValues: {
            exampleOne: "Default value",
            exampleTwo: "abc"
        }
    })

    const onSubmit = (data) => console.log(data)

    return <div style={{paddingTop: "100px", paddingLeft: "16px", paddingRight: "16px"}}>
        <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", gap: "16px"}}>
            <input {...register("exampleOne")}/>
            <input {...register("exampleTwo")}/>
            <div>Value of second field is: {watch("exampleTwo")}</div>
            <button onClick={() => setValue("exampleOne", "Example set!")}>Set value of first field to "Example set!"</button>
            <button onClick={() => reset()}>Reset form to default values</button>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default ValidationTestOne;
