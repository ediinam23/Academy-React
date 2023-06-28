import React from "react";
import PageTitleAdministration from "./pageTitleAdministration/PageTitleAdministration.jsx";
import IntroductionAdministration from "./introductionAdministration/IntroductionAdministration.jsx";
import ProductsAdministration from "./productsAdministration/ProductsAdministration.jsx";
import ContactUsAdministration from "./contactUsAdministration/ContactUsAdministration.jsx";
import InterestingAdministration from "./interestingAdministration/InterestingAdministration.jsx";

const Administration = () => {
    return <div style={{paddingTop: "100px", paddingLeft: "16px", paddingRight: "16px"}}>
        <h1>Administration</h1>

        <PageTitleAdministration />
        <IntroductionAdministration />
        <ProductsAdministration />
        <ContactUsAdministration />
        <InterestingAdministration />
    </div>
}

export default Administration;