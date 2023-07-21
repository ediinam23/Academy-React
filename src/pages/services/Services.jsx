import React from "react";
import Products from "./products/Products.jsx";
import ContactUs from "./contactUs/ContactUs.jsx";
import InterestingTopics from "./interestingTopics/InterestingTopics.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Introduction from "./introduction/Introduction.jsx";
import SectionTitle from "../../components/title/sectionTitle/SectionTitle.jsx";
import classes from "./Services.module.scss";
import Navigation from "../../components/navigation/Navigation.jsx";
import {useAppData} from "../../context/AppContext.jsx";
import pageWrapper from "../pageWrapper/PageWrapperHOC.jsx";
import withAuth from "../authHOC/authHOC.jsx";

const Services = () => {
    const {pageData} = useAppData();
    const {pageTitle} = pageData;
    return <div className={classes['container']}>
        {/*  Navigation  */}
        <Navigation/>
        {/*  PageTitle  */}
        <SectionTitle title={pageTitle} className={classes["page-title"]}/>
        {/*  Introduction  */}
        <Introduction/>
        {/*  Products  */}
        <Products/>
        {/*  Contact us  */}
        <ContactUs/>
        {/*  InterestingTopics  */}
        <InterestingTopics />
        {/*  Footer  */}
        <Footer/>

    </div>
}

export default withAuth(pageWrapper(Services));