import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Genre from './Genre.jsx'
import GenreList from './GenreList.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NameList from './NameList.jsx'
import { Link } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import Description from './Description.jsx'
import Login from './Login.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <GenreList />,
    errorElement : <ErrorPage />
  },
  {
    path : '/NameList',
    element : <NameList />
  },
  {
    path : '/desc',
    element : <Description />
  },
  {
    path : "/login",
    element : <Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
