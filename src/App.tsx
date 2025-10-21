// 配置web3modal
import {
  metadata,
  networks,
  projectId,
  wagmiAdapter,
} from '@/config/wagmiConfig'
import { createAppKit } from '@reown/appkit/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import { WagmiProvider } from 'wagmi'
import { ResponsiveLayout } from './components/ResponsiveLayout'

// 导入自定义组件
// 公用组件

// import Alert from './components/Alert'

// 首页

// 空投

// 二池

const queryClient = new QueryClient()

const generalConfig = {
  projectId,
  networks,
  metadata,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#FFFFFF',
  },
  defaultNetwork: networks[2],
}

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
  features: {
    // 授权钱包地址前
    email: false, // default to true
    socials: [],

    // 授权后
    swaps: false, // Optional - true by default
    send: false, // Optional - true by default
    // onramp: false, // Optional - true by default
    analytics: true, // Optional - defaults to your Cloud configuration
  },
})

function App() {
  return (
    // <ResponsiveLayout>
    //   <Navigation />
    //   <main className='app-main'>
    //     <Outlet />
    //   </main>
    // </ResponsiveLayout>
    <>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <ResponsiveLayout>
            <Outlet />
          </ResponsiveLayout>
        </QueryClientProvider>
      </WagmiProvider>
    </>
    // <>
    //   <WagmiProvider config={wagmiAdapter.wagmiConfig}>
    //     <QueryClientProvider client={queryClient}>
    //       <Router>
    //         {/* 公用部分 */}
    //         <Header />
    //         <EventLog />

    //         {/* 路由部分 */}
    //         <Routes>
    //           <Route path='/' element={<Home />} /> {/* 首页 - Home 组件 */}
    //           <Route path='/airdrop' element={<Airdrop />} />{' '}
    //           {/* 空投页面 - Airdrop */}
    //           <Route path='/poolv2' element={<Poolv2 />} />{' '}
    //           {/* 二池页面 - Airdrop */}
    //         </Routes>
    //       </Router>
    //     </QueryClientProvider>
    //   </WagmiProvider>
    // </>
  )
}

export default App
