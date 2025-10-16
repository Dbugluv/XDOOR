import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
import { HomePage } from '../pages/HomePage'
// import { AboutPage } from '../pages/AboutPage'
// import { ContactPage } from '../pages/ContactPage'
// import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      // {
      //   path: 'about',
      //   element: <AboutPage />
      // },
      // {
      //   path: 'contact',
      //   element: <ContactPage />
      // },
      // {
      //   path: '*',
      //   element: <NotFoundPage />
      // }
    ]
  }
])