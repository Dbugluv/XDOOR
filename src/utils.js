// 地址0
export const addressZero = '0x0000000000000000000000000000000000000000'

// 代币合约地址
export const xdoorContractAddress = '0x5d21e39a174010349641817C570A1b04d24C844c'

// 分红合约地址
export const dividendContractAddress = '0x4Cf81e9604617CB4dc2Bc2a0c986B682CaAB99b3'

// fomo3d合约地址
export const fomo3dContractAddress = '0x0da2BD9B521fD8b29bd8a0F5d42D0178DF8077E3'

/**
 * 格式化钱包地址为短格式
 * @param {string} address 钱包地址
 * @param {number} [start=4] 开头保留位数
 * @param {number} [end=4] 结尾保留位数
 * @returns {string} 缩写地址，如 0x1234...abcd
 */
export function formatAddress(address, start = 4, end = 4) {
  if (!address || typeof address !== 'string') return ''
  if (address.length < start + end) return address
  return `${address.slice(0, start + 2)}...${address.slice(-end)}`
}