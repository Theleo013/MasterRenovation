import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { urls } from "@/shared/Urls";
import Layout from "@/shared/Layout";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const Projects = lazy(() => import("@/pages/Projects"));
const About = lazy(() => import("@/pages/About"));
const PageNotFound = lazy(() => import("@/shared/Components/PageNotFound"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={urls.HOME} element={<Layout />}>
          <Route path={urls.HOME} element={<Home />} />
          <Route path={urls.SERVICES} element={<Services />} />
          <Route path={urls.PROJECTS} element={<Projects />} />
          <Route path={urls.ABOUT} element={<About />} />
        </Route>
        <Route path={urls.NOT_FOUND} element={<PageNotFound />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
