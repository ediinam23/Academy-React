import React from "react";
import PageTitleAdministration from "./pageTitleAdministration/PageTitleAdministration.jsx";
import IntroductionAdministration from "./introductionAdministration/IntroductionAdministration.jsx";
import ProductsAdministration from "./productsAdministration/ProductsAdministration.jsx";
import ContactUsAdministration from "./contactUsAdministration/ContactUsAdministration.jsx";
import InterestingAdministration from "./interestingAdministration/InterestingAdministration.jsx";
import pageWrapper from "../pageWrapper/PageWrapperHOC.jsx";
import {useNavigate} from "react-router-dom";
import withAuth from "../authHOC/authHOC.jsx";

const Administration = () => {
    const navigate = useNavigate();
    const onClick = () => {
         navigate("/messages")
        // -> /messages
    }

    return <div style={{paddingTop: "100px", paddingLeft: "16px", paddingRight: "16px"}}>
        <h1>Administration</h1>

        <div onClick={() => onClick()}>When you click me, you can do to messages</div>

        <PageTitleAdministration />
        <IntroductionAdministration />
        <ProductsAdministration />
        <ContactUsAdministration />
        <InterestingAdministration />
    </div>
}

export default withAuth(pageWrapper(Administration));
