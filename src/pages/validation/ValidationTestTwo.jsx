import React from "react";
import { useForm } from "react-hook-form";

const ValidationTestTwo = () => {
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
        }
    })

    const onSubmit = (data) => console.log(data)

    const logErrors = () => console.log(errors)

    return <div style={{paddingTop: "100px", paddingLeft: "16px", paddingRight: "16px"}}>
        <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", gap: "16px"}}>
            <input {...register("exampleOne",
                {
                    disabled: true
                })}/>
            <input {...register("exampleTwo",
                {
                    required: "Field is required!",
                    minLength: {
                        value: 2,
                        message: "Field cannot be less than 2 characters long!"
                    },
                    maxLength: {
                        value: 3,
                        message: "Field cannot be more than 3 characters long!"
                    },
                    validate: (value, formValues) => {
                        return value === 'abc' || "Field invalid!"
                    }
                })}/>
            {errors?.exampleTwo && <span>{errors?.exampleTwo?.message}</span>}
            <div>Value of second field is: {watch("exampleTwo")}</div>
            <button onClick={() => logErrors()}>Log errors</button>
            <button onClick={() => setValue("exampleOne", "Example set!")}>Set value of first field to "Example set!"</button>
            <button onClick={() => reset()}>Reset form to default values</button>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default ValidationTestTwo;
