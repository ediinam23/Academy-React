import React from "react";
import PageTitleAdministration from "./pageTitleAdministration/PageTitleAdministration.jsx";
import IntroductionAdministration from "./introductionAdministration/IntroductionAdministration.jsx";
import ProductsAdministration from "./productsAdministration/ProductsAdministration.jsx";
import ContactUsAdministration from "./contactUsAdministration/ContactUsAdministration.jsx";
import InterestingAdministration from "./interestingAdministration/InterestingAdministration.jsx";

const Administration = ({pageData, setPageData}) => {
    return <div style={{paddingTop: "100px", paddingLeft: "16px", paddingRight: "16px"}}>
        <h1>Administration</h1>

        <PageTitleAdministration value={pageData?.pageTitle}
                                 changeValue={(value) => setPageData({type: 'page-title', data: value})}/>
        <IntroductionAdministration data={pageData?.introduction}
                                    changeData={(property, value) => setPageData({type: 'introduction', data: value, property: property})}/>
        <ProductsAdministration  data={pageData?.products}
                                 changeData={(property, value) => setPageData({type: 'products', data: value, property: property})} />
        <ContactUsAdministration  data={pageData?.contactUs}
                                  changeData={(property, value) => setPageData({type: 'contact-us', data: value, property: property})} />
        <InterestingAdministration  data={pageData?.interesting}
                                    changeData={(property, value) => setPageData({type: 'interesting', data: value, property: property})} />
    </div>
}

export default Administration;