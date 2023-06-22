import React from "react";

const PageTitle = ({
                   text,
                   hello = "Hi"
}) => {

    return(
        <h1>{text} <span>{hello}</span></h1>
    )
}

export default PageTitle;