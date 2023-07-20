import React from "react";
import pageWrapper from "../pageWrapper/PageWrapperHOC.jsx";
import {Outlet} from "react-router-dom";

const TestOutlet = () => {
    return <div style={{paddingTop: "100px", paddingLeft: "16px", paddingRight: "16px"}}>
        <h1>This is a test</h1>

        <div style={{border: '1px solid red'}}>
            <Outlet/>
        </div>
    </div>
}

export default pageWrapper(TestOutlet);
