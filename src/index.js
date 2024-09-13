import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/navbar",
    element: <NavBar />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
