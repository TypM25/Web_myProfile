import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './page/Home.jsx'
import Experience from './page/Experience.jsx'
import Transcript from './page/Transcript.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/experience",
    element: <Experience/>
  },
  {
    path: "/transcript",
    element: <Transcript/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
