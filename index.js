import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Simmer } from "./src/components/simmer";


const About = lazy(()=> import("./src/components/About") )

const Applayout = () => {
  return (
    <div className="app">
      <Header />
             <Outlet/>

    </div>
  );
};

const apphRouter =  createBrowserRouter([
  {
    path: "/",
    element : <Applayout  />,
    children: [
      {
        path: "/",
        element : <Body/>,
      },
      {
        path: "/About",
        element : <Suspense fallback={<Simmer/>}><About/></Suspense>,
      },
      {
        path: "/Contacts",
        element : <Contact/>,
      },
      {
        path: "/Restaurants/:resid",
        element : <RestaurantMenu/>,
      },
    
    ]
  },
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router= {apphRouter}  /> );

