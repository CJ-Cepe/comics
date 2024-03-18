import React from 'react'
import ReactDOM from 'react-dom/client'
import ComicExplorer from './ComicExplorer.jsx'
import Comic from './Comic.jsx'

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComicExplorer />,
  },
  {
    path: "/:name", 
    element: <Comic />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
