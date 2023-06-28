import React, {createContext, useContext, useReducer} from "react";
import Topic1Image from "../assets/images/Group 1045.svg";
import ViaProduct from "../assets/images/Group 1098.png";

const initialPageData = {
    pageTitle: "Software development",
    introduction: {
        description: "We are one of the few companies which create their own products, and we are proud to mention SHIFT and eTenderi. We make software according to your wishes and needs. Our team of dedicated programmers and IT professionals will create an easy-to-use solution for you, with unique user experience and attractive design. So far we have met the requirements of the following clients: Agency for electronical communications and postal services, Societe Generale bank, Ministry of Economy, Ministry of Justice, Volcano and others.",
        image: Topic1Image,
        altText: "Software development"
    },
    products: {
        title: ["Take a look at", "our products"],
        items: [
            {
                id: 1,
                title: "Via",
                description: "Business travel automatization software.",
                image: ViaProduct
            }
        ]
    },
    contactUs: {
        title: "Like what you see?",
        description: "Let's talk about it"
    },
    interesting: {
        title: "You might be interested",
        items: [
            {
                id: 1,
                title: "Mobile apps development",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat...",
                alt: "Mobile aps",
                image: Topic1Image
            },
            {
                id: 2,
                title: "Website development",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat...",
                alt: "Website development",
                image: Topic1Image
            },
            {
                id: 3,
                title: "SaaS",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat...",
                alt: "SaaS",
                image: Topic1Image
            }
        ]
    }
}

const pageDataReducer = (state, action) => {
    switch(action.type){
        case 'page-title':
            return {
                ...state,
                pageTitle: action?.data
            };
        case 'introduction':
            return {
                ...state,
                introduction: {
                    ...state?.introduction,
                    [action?.property]: action?.data
                }
            };
        case 'products':
            return {
                ...state,
                products: {
                    ...state?.products,
                    [action?.property]: action?.data
                }
            };
        case 'contact-us':
            return {
                ...state,
                contactUs: {
                    ...state?.contactUs,
                    [action?.property]: action?.data
                }
            };
        case 'interesting':
            return {
                ...state,
                interesting: {
                    ...state?.interesting,
                    [action?.property]: action?.data
                }
            };
        default:
            return state;
    }
}

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [pageData, dispatch] = useReducer(pageDataReducer, initialPageData)

    return <AppContext.Provider value={{
        pageData: pageData,
        dispatch: (data) => dispatch(data)
    }}>
        {children}
    </AppContext.Provider>
}

export const useAppData = () => {
    return useContext(AppContext)
}

export default AppProvider;