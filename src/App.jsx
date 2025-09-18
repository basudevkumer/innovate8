import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayouts from "./rootlayout/RootLayouts";
import Home from "./page/Home";
import Blog from "./page/Blog";


const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
