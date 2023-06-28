import React, {useState} from "react";
import './App.scss';
import Services from "./pages/services/Services.jsx";
import Administration from "./pages/administration/Administration.jsx";
import AppProvider from "./context/AppContext.jsx";

function App() {
    const [sectionInView, setSectionInView] = useState("administration") // administration ili services

  return (
      <AppProvider>
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
          {sectionInView === "administration" && <Administration />}
          {sectionInView === "services" && <Services/>}
      </div>
      </AppProvider>

  )
}

export default App
