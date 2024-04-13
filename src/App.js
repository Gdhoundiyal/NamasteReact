import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurentMenu from "./components/RestaurentMeuu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SignUp from "./components/Forms/SignUp";
import LogIn from "./components/Forms/LogIn";
import Cart from "./components/Cart";
import Footer from "./components/footer";
import Offers from "./Header/offers";
import HeaderRestaurents from "./Header/headerRestaurents";
import Help from "./Header/Help";

const Aboutus = lazy(() => import("./Header/Help"));

const App = () => {
  return (
    <div className=" m-0 p-0 box-content">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        // Suspense is used to get the data when needed
        path: "/Help",
        element: (
          <Suspense>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurents",
        element: <HeaderRestaurents />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
