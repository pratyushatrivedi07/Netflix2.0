import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
