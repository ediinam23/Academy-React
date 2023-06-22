import React from "react";
import PageTitleAdministration from "./pageTitleAdministration/PageTitleAdministration.jsx";
import IntroductionAdministration from "./introductionAdministration/IntroductionAdministration.jsx";

const Administration = ({pageData, setPageData}) => {
    return <div style={{paddingTop: "100px"}}>
        Administration

            {/*  ProductsAdministration  */}
                    {/*
                        input Title
                    */}
                    {/*
                        Table - niz elementa
                        Form - vazi za svaki element
                                - input Title
                                - textarea - Description
                                - input - Image
                    */}
            {/*  contactUsAdministration  */}
            {/*  InterestingAdministration  */}

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
    </div>
}

export default Administration;