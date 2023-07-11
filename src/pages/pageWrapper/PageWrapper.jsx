import React from 'react';
import {
    Link,
} from "react-router-dom";

const PageWrapper = ({children}) => {
    return  <div className="__root-element">
        <div className={"__toggle-view-button-container"}>
            <Link to="/administration">Go to administration</Link>
            <Link to="/">Go to services</Link>
        </div>
        {children}
    </div>
}

export default PageWrapper;