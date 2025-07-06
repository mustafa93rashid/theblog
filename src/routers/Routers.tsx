import { createBrowserRouter } from "react-router-dom";
import Newsletter from "../pages/Newsletter";
import App from "../App";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import About from "../pages/About";
import BlogDetails from "../pages/BlogDetails";

export const routers = createBrowserRouter([
  {
    path: "/theblog",
    element: <App />,
    children: [
      {
        index: true,
        element: <Blog />,
      },
      {
        path: "project",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: ":id",
        element: <BlogDetails />,
      }
    ],
  },
]);