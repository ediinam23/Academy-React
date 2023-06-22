import React from "react";
import Products from "./products/Products.jsx";
import ContactUs from "./contactUs/ContactUs.jsx";
import InterestingTopics from "./interestingTopics/InterestingTopics.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Introduction from "./introduction/Introduction.jsx";
import SectionTitle from "../../components/title/sectionTitle/SectionTitle.jsx";
import classes from "./Services.module.scss";
import Navigation from "../../components/navigation/Navigation.jsx";

const Services = ({pageData}) => {
    return <div className={classes['container']}>
        {/*  Navigation  */}
        <Navigation/>
        {/*  PageTitle  */}
        <SectionTitle title={pageData?.pageTitle} className={classes["page-title"]}/>
        {/*  Introduction  */}
        <Introduction description={pageData?.introduction?.description}
                      image={pageData?.introduction?.image}
                      altText={pageData?.introduction?.altText}/>
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