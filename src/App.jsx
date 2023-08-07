import React from "react";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
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
import ValidationTestOne from "./pages/validation/ValidationTestOne.jsx";
import ValidationTestTwo from "./pages/validation/ValidationTestTwo.jsx";
import ValidationTestThree from "./pages/validation/ValidationTestThree.jsx";
import TaskCategories from "./pages/taskCategories/TaskCategories.jsx";
import {reactQueryConfig} from "./config/config.js";

const queryClient = new QueryClient(reactQueryConfig)


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
        path: "/react-hook-form-one",
        element: <ValidationTestOne />,
    },
    {
        path: "/react-hook-form-two",
        element: <ValidationTestTwo />,
    },
    {
        path: "/react-hook-form-three",
        element: <ValidationTestThree />,
    },
    {
        path: "/task-categories",
        element: <TaskCategories />,
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
      <QueryClientProvider client={queryClient}>
          <UserProvider>
              <AppProvider>
                  <ModalProvider>
                    <RouterProvider router={router} />
                </ModalProvider>
              </AppProvider>
          </UserProvider>
      </QueryClientProvider>

  )
}

export default App
