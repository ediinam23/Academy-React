import React from "react";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Services from "./pages/services/Services.jsx";
import Administration from "./pages/administration/Administration.jsx";
import AppProvider from "./context/AppContext.jsx";
import './App.scss';
import PageWrapper from "./pages/pageWrapper/PageWrapper.jsx";


// with page wrapper component
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <PageWrapper><Services/></PageWrapper>,
//     },
//     {
//         path: "administration",
//         element: <PageWrapper><Administration /></PageWrapper>,
//     },
// ]);

// with page wrapper HOC
const router = createBrowserRouter([
    {
        path: "/",
        element: <Services/>,
    },
    {
        path: "administration",
        element: <Administration />,
    },
]);

function App() {


  return (
      <AppProvider>
          <RouterProvider router={router} />

      </AppProvider>

  )
}

export default App
