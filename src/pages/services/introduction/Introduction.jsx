import React from "react";
import classes from "./Introduction.module.scss";

const Introduction = ({description, image, altText}) => {
    return <section className={classes["container"]}>
        <img src={image} alt={altText}/>
        <p>{description}</p>
    </section>
}

export default Introduction;