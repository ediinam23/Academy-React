import React from "react";

const SectionWrapper = ({title, children}) => {
    return <div>
        {title && <h3>{title}</h3>}
        <div>
            {children}
        </div>
    </div>
}

export default SectionWrapper;