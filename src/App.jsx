import React, {useState} from "react";
import './App.scss';
import Topic1Image from "./assets/images/Group 1045.svg";
import ViaProduct from "./assets/images/Group 1098.png";
import Services from "./pages/services/Services.jsx";
import Administration from "./pages/administration/Administration.jsx";

function App() {

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
                    title: "Mobile apps development",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat...",
                    alt: "Mobile aps",
                    image: Topic1Image
                },
                {
                    title: "Website development",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat...",
                    alt: "Website development",
                    image: Topic1Image
                },
                {
                    title: "SaaS",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat...",
                    alt: "SaaS",
                    image: Topic1Image
                }
            ]
        }
    }
    const [sectionInView, setSectionInView] = useState("administration") // administration ili services
    const [pageData, setPageData] = useState(initialPageData)

  return (
      <div className="__root-element">
          <div className={"__toggle-view-button-container"}>
          <button onClick={() => setSectionInView(prevState => prevState === "administration"
              ? "services"
              : "administration")}> {
              sectionInView === "administration"
                  ? "Go to Services"
                  : "Go to Administration"
          } </button>
          </div>
          {sectionInView === "administration" && <Administration pageData={pageData}
                                                                 setPageData={setPageData}/>}
          {sectionInView === "services" && <Services pageData={pageData}/>}
      </div>

  )
}

export default App
