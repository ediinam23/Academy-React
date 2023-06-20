import React from "react";
import Products from "./products/Products.jsx";
import ContactUs from "./contactUs/ContactUs.jsx";
import InterestingTopics from "./interestingTopics/InterestingTopics.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Services = ({pageData}) => {
    return <div>
        {/*  Navigation  */}
        {/*  PageTitle  */}
        {/*  Introduction  */}
        {/*  Products  */}
        <Products title={pageData?.products?.title}
                  products={pageData?.products?.items}/>
        {/*  Contact us  */}
        <ContactUs title={pageData?.contactUs?.title}
                   description={pageData?.contactUs?.description}/>
        {/*  InterestingTopics  */}
        <InterestingTopics title={pageData?.interesting?.title}
                           topics={pageData?.interesting?.items}/>
        {/*  Footer  */}
        <Footer/>

    </div>
}

export default Services;