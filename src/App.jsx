import React, {useState} from "react";
import './App.scss';
import Topic1Image from "./assets/images/Group 1045.svg";
import ViaProduct from "./assets/images/Group 1098.png";
import Services from "./pages/services/Services.jsx";
import Administration from "./pages/administration/Administration.jsx";
import Input from "./components/formFields/input/Input.jsx";

function App() {

    const initialPageData = {
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
          <button onClick={() => setSectionInView(prevState => prevState === "administration"
              ? "services"
              : "administration")}> {
              sectionInView === "administration"
                  ? "Go to Services"
                  : "Go to Administration"
          } </button>
          {sectionInView === "administration" && <Administration/>}
          {sectionInView === "services" && <Services pageData={pageData}/>}
      </div>

  )
}

export default App
