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
                                 changeValue={(value) => setPageData(prevState => ({
                                     ...prevState,
                                     pageTitle: value
                                 }))}/>
        <IntroductionAdministration data={pageData?.introduction}
                                    changeData={(property, value) => setPageData(prevState => ({
                                        ...prevState,
                                        introduction: {
                                            ...prevState?.introduction,
                                            [property]: value
                                        }
                                    }))} />
        <ProductsAdministration  data={pageData?.products}
                                 changeData={(property, value) => setPageData(prevState => ({
                                     ...prevState,
                                     products: {
                                         ...prevState?.products,
                                         [property]: value
                                     }
                                 }))} />
        <ContactUsAdministration  data={pageData?.contactUs}
                                 changeData={(property, value) => setPageData(prevState => ({
                                     ...prevState,
                                     contactUs: {
                                         ...prevState?.contactUs,
                                         [property]: value
                                     }
                                 }))} />
        <InterestingAdministration  data={pageData?.interesting}
                                     changeData={(property, value) => setPageData(prevState => ({
                                         ...prevState,
                                         interesting: {
                                             ...prevState?.interesting,
                                             [property]: value
                                         }
                                     }))} />
    </div>
}

export default Administration;