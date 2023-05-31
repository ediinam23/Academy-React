import React from "react";

const Title = ({
                   text,
                   hello = "Hi"
}) => {

    return(
        <h1>{text} <span>{hello}</span></h1>
    )
}

export default Title;