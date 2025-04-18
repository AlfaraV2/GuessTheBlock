import { createBrowserRouter } from "react-router-dom";
import Home from "../Home.jsx";
import Gallery from "../Gallery.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);
