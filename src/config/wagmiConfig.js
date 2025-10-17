import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, bsc, bscTestnet, xLayer, xLayerTestnet } from '@reown/appkit/networks'

// 获取项目 ID 从环境变量
export const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const metadata = {
    name: 'xd-test2',
    description: 'AppKit Example',
    url: 'http://localhost:5173', // origin 必须与你的域名和子域匹配
    icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 定义支持的网络
export const networks = [mainnet, bsc, bscTestnet, xLayer, xLayerTestnet]

// 设置 Wagmi Adapter 配置
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

export const wagmiConfig = wagmiAdapter.wagmiConfig
