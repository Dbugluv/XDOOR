import axios from 'axios'

const api = axios.create({
  baseURL: 'https://xd-test1013.netlify.app/api', // 后端 API 基础 URL
  timeout: 10000,  // 超时设置
})

export const getAirdropAmount = async params => {
  try {
    const response = await api.get('/airdropAmount', { params })
    return response.data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
