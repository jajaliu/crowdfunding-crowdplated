import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Nav from "./components/Nav";
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage from './pages/LoginPage';
import CreateProjectPage from './pages/CreateProjectPage';

const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },  
      {
        path: '/project/:id',
        element: <ProjectPage />
      },
      {
        path: '/create-project',
        element: <CreateProjectPage />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router = {router}></RouterProvider>
   
  )
}

export default App
