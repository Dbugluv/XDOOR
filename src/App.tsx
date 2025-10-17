// src/App.tsx
import { Outlet } from 'react-router-dom'
import { ResponsiveLayout } from './components/ResponsiveLayout'
import { Navigation } from './components/Navigator/index'

function App() {
  return (
    <ResponsiveLayout>
      <Navigation />
      <main className='app-main'>
        <Outlet />
      </main>
    </ResponsiveLayout>
  )
}

export default App
