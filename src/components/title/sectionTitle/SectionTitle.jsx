import React from "react";
import "./SectionTitle.scss";


// color = light

// color = red
const SectionTitle = ({
                          title = "",
                          color = "dark",
                          className = ""
}) => {
    return <h3 className={`__section-title ${className} ${color}`}>{title}</h3>
}

export default SectionTitle;