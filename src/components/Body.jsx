import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Browser from "./Home Page/Browser";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import MovieInfo from "../components/MovieInfoComponents/MovieInfo";
import MoviesByActor from "./MovieInfoComponents/MoviesByActor";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useOnlineStatus from "../hooks/useOnlineStatus";


const Body = () => {

  useOnlineStatus();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
    {
      path: "/movieinfo/:id",
      element: <MovieInfo />,
    },
    {
      path: "/castmovie/:id",
      element: <MoviesByActor />,
    },
  ]);

  return (
    <>
      
      <div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        stacked
        toastStyle={{ border: "1px solid #dadadaaa" }}
      />
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
};

export default Body;
