import React from "react";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Services from "./pages/services/Services.jsx";
import Administration from "./pages/administration/Administration.jsx";
import AppProvider from "./context/AppContext.jsx";
import './App.scss';
import TestOutlet from "./pages/testOutlet/TestOutlet.jsx";
import OutletExample from "./pages/testOutlet/OutletExample.jsx";
import Product from "./pages/product/Product.jsx";
import ModalProvider from "./context/ModalContext.jsx";
import UserProvider from "./context/UserContext.jsx";
import Login from "./pages/login/Login.jsx";


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
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/administration",
        element: <Administration />,
    },
    {
        path: "/products/:type/:typeID",
        element: <Product />,
    },
    {
        path: "/messages",
        element: <TestOutlet/>,
        children: [
            {
                path: "tasks", // /messages/tasks
                element: <OutletExample />,
            },
            {
                path: "message", // /messages/tasks
                element: <OutletExample additionalText="You have new message"/>,
            },
        ],
    }
]);

function App() {


  return (
      <UserProvider>
          <AppProvider>
              <ModalProvider>
                <RouterProvider router={router} />
            </ModalProvider>
          </AppProvider>
      </UserProvider>

  )
}

export default App
