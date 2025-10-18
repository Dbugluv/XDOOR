import Airdrop from '@/components/Airdrop'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
import { HomePage } from '../pages/HomePage'
// import { AboutPage } from '../pages/AboutPage'
// import { ContactPage } from '../pages/ContactPage'
// import { NotFoundPage } from '../pages/NotFoundPage'

{
  /* 路由部分 */
}
//         <Routes>
//           <Route path='/' element={<Home />} /> {/* 首页 - Home 组件 */}
//           <Route path='/airdrop' element={<Airdrop />} />{' '}
//           {/* 空投页面 - Airdrop */}
//           <Route path='/poolv2' element={<Poolv2 />} />{' '}
//           {/* 二池页面 - Airdrop */}
//         </Routes>

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' replace />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'airdrop',
        element: <Airdrop />,
      },
      // {
      //   path: 'contact',
      //   element: <ContactPage />
      // },
      // {
      //   path: '*',
      //   element: <NotFoundPage />
      // }
    ],
  },
])
