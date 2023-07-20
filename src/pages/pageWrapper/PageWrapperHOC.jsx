import React from 'react';
import {
    Link,
} from "react-router-dom";

const pageWrapper = (Component) => {
    return (props) => {
        return <div className="__root-element">
            <div className={"__toggle-view-button-container"}>
                <Link to="/administration">Go to administration</Link>
                <Link to="/">Go to services</Link>
                <a href={"/administration"}>Go to admin page</a>
            </div>
            <Component {...props}/>
        </div>
    }
}

export default pageWrapper;