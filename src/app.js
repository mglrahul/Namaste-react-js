import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/login";
import Cart from "./components/Cart";
import Profile from "./components/Profile";


const AppLayout = () => {
  return (
    <React.Fragment key="12">
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurant-menu/:resId",
        element: <RestaurantMenu />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
