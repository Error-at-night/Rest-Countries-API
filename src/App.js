import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeProvider from "react-bootstrap/ThemeProvider"

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./home/Home";
import SingleCountry from './singleCountry/SingleCountry';
import NotFound from './notFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/name/:name",
        element: <SingleCountry/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
