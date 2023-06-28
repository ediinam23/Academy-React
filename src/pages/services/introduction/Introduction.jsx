import React from "react";
import classes from "./Introduction.module.scss";
import {useAppData} from "../../../context/AppContext.jsx";

const Introduction = () => {
    const {pageData} = useAppData();
    const {introduction} = pageData;
    const {description, image, altText} = introduction;

    return <section className={classes["container"]}>
        <img src={image} alt={altText}/>
        <p>{description}</p>
    </section>
}

export default Introduction;