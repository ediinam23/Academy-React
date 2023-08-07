import React from 'react';
import {
    Link,
} from "react-router-dom";
import {useUserData} from "../../context/UserContext.jsx";

const pageWrapper = (Component) => {
    return (props) => {
        const {userData, logout} = useUserData();

        return <div className="__root-element">
            <div className={"__toggle-view-button-container"}>
                <Link to="/administration">Go to administration</Link>
                <Link to="/">Go to services</Link>
                <Link to="/task-categories">Task categories</Link>
                <a href={"/administration"}>Go to admin page</a>
                <div style={{padding: '0 16px'}}>{userData?.name}</div>
                <div style={{padding: '0 16px'}} onClick={() => logout()}>Logout</div>
            </div>
            <Component {...props}/>
        </div>
    }
}

export default pageWrapper;