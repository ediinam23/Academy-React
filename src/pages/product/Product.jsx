import React from 'react';
import pageWrapper from "../pageWrapper/PageWrapperHOC.jsx";
import {useParams} from "react-router-dom";

const Product = () => {
    const params = useParams();

    console.log(params)
    return <div style={{paddingTop: "100px"}}>
        This is a product page.
        You have selected {params?.type} {params?.typeID}
    </div>
}

export default pageWrapper(Product)