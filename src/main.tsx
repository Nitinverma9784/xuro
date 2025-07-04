import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Community from '@/pages/Community';
import Contact from '@/pages/Contact';
import Inspiration from './pages/Inspiration';
import Layout from './Layout';
import "./index.css"
let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, // No <Outlet />, so child routes won’t show!
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "Community", element: <Community /> },
      { path: "contact", element: <Contact /> },
      { path: "inspiration", element: <Inspiration /> },
      
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
