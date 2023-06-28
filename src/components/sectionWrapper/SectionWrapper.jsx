import React from "react";
import classes from "./SectionWrapper.module.scss"

const SectionWrapper = ({title, children}) => {
    return <div className={classes["container"]}>
        {title && <h3>{title}</h3>}
        <div>
            {children}
        </div>
    </div>
}

export default SectionWrapper;