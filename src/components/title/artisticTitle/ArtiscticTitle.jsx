import React from "react";
import classes from "./ArtisticTitle.module.scss";

const ArtiscticTitle = ({title = [""]}) => {
    return <h3 className={classes["container"]}>
        {title[0]}
        {title[1] && <div>{title[1]}</div>}
    </h3>
}

export default ArtiscticTitle;