import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import CountdownTimer from './CountdownTimer';
import PlayerList from './PlayerList';
import ClaimReward from './ClaimReward';

import './Fomo3d.scss'

import { useState, useEffect } from 'react'

// 合约交互
import { useAppKitNetwork, useAppKitAccount } from '@reown/appkit/react'
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { readContract } from '@wagmi/core'
import { wagmiConfig } from '../../config/wagmiConfig' // ⚠️ 请换成你的 wagmi 配置文件
import { formatUnits, parseUnits } from 'viem'   // ✅ 导入格式化函数
import fomo3dAbi from '../../config/fomo3dAbi'
import { fomo3dContractAddress } from '../../utils'


import xdoorAbi from '../../config/xdoorAbi'
import { xdoorContractAddress } from '../../utils'

function Fomo3d () {
  const { address, isConnected } = useAppKitAccount(); // AppKit hook to get the address and check if the user is connected
  const { writeContractAsync } = useWriteContract()
  const [txHash, setTxHash] = useState(null)
  const [isLoadingBtn, setLoadingBtn] = useState(false)
  const [rounds, setRounds] = useState([])

  // 自动查询 currentPrizePool
  const { data: currentPrizePool, isLoading: isLoadingPrizePool, refetch: refetchPrizePool } = useReadContract({
    address: fomo3dContractAddress,
    abi: fomo3dAbi,
    functionName: 'getCurrentPrizePool',
    query: {
      enabled: !!address,   // ✅ 只有当 address 存在时才启用自动读取
      refetchInterval: 10000, // ✅ （可选）每 10 秒自动刷新一次
    },
  })

  // 自动查询 currentRound
  const { data: currentRound, isLoading: isLoadingCurrentRound, refetch: refetchCurrentRound } = useReadContract({
    address: fomo3dContractAddress,
    abi: fomo3dAbi,
    functionName: 'currentRound',
    query: {
      enabled: !!address,   // ✅ 只有当 address 存在时才启用自动读取
    },
  })

  // 自动查询 roundEndTime
  const { data: roundEndTime, isLoading: isLoadingRoundEndTime, refetch: refetchRoundEndTime } = useReadContract({
    address: fomo3dContractAddress,
    abi: fomo3dAbi,
    functionName: 'roundEndTime',
    query: {
      enabled: !!address,   // ✅ 只有当 address 存在时才启用自动读取
      refetchInterval: 10000, // ✅ （可选）每 10 秒自动刷新一次
    },
  })

  // 自动查询 currentPlayerList
  const { data: currentPlayerList, isLoading: isLoadingCurrentPlayerList, refetch: refetchCurrentPlayerList } = useReadContract({
    address: fomo3dContractAddress,
    abi: fomo3dAbi,
    functionName: 'getCurrentPlayerList',
    query: {
      enabled: !!address,   // ✅ 只有当 address 存在时才启用自动读取
      refetchInterval: 10000, // ✅ （可选）每 10 秒自动刷新一次
    },
  })
  
  const loadRoundData = async (round) => {
    const loadPlayers = async () => {
      // ✅ 直接重新读数据，不依赖refetch
      const data = await readContract(wagmiConfig, {
        address: fomo3dContractAddress,
        abi: fomo3dAbi,
        functionName: 'getRoundPlayers',
        args: [BigInt(round)], // ✅ 注意：round 必须是 BigInt 类型
      })
      // console.log('Round', round, 'players:', data)
      return data
    }
    const loadRewards = async () => {
      const data = await readContract(wagmiConfig, {
        address: fomo3dContractAddress,
        abi: fomo3dAbi,
        functionName: 'roundRewards',
        args: [BigInt(round), address],
      })
      return data
    }
    const loadClaimed = async () => {
      const data = await readContract(wagmiConfig, {
        address: fomo3dContractAddress,
        abi: fomo3dAbi,
        functionName: 'hasClaimed',
        args: [BigInt(round), address],
      })
      return data
    }
    return await Promise.all([loadPlayers(), loadRewards(), loadClaimed()])
  }

  // ✅ 等待交易确认
  const { isSuccess: txConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  })

  // 👇 提取成单独函数，方便复用
  const loadPlayers = async () => {
    const numRound = Number(currentRound)
    const prevRound = numRound - 1
    const prev2Round = numRound - 2
    try {
      let players
      let reward
      let hasClaimed
      let index
      const tempRounds = []

      if (prevRound > 0) {
        [players, reward, hasClaimed] = await loadRoundData(prevRound)
        index = players.map(p => p.toLowerCase()).indexOf(address.toLowerCase())
        tempRounds.push({ round: prevRound, index: index + 1, reward, hasClaimed, players })
      }

      if (prev2Round > 0) {
        [players, reward, hasClaimed] = await loadRoundData(prev2Round)
        index = players.map(p => p.toLowerCase()).indexOf(address.toLowerCase())
        tempRounds.push({ round: prev2Round, index: index + 1, reward, hasClaimed, players })
      }

      setRounds(tempRounds)
    } catch (err) {
      console.error('加载 roundPlayers 失败:', err)
    }
  }


  // 👇 监听交易是否成功
  useEffect(() => {
    if (txConfirmed) {
      setLoadingBtn(false)
      loadPlayers() // ✅ 交易成功后刷新 rounds
    }
  }, [txConfirmed])

  // ✅ 在 useEffect 里异步加载数据
  useEffect(() => {
    if (currentRound && address) {
      loadPlayers()
    }
  }, [currentRound, address])

  // 自动查询 estimateETH
  // const { data: estimateETH, isLoading: isLoadingEstimateETH } = useReadContract({
  //   address: xdoorContractAddress,
  //   abi: xdoorAbi,
  //   functionName: 'estimateTokenToETH',
  //   args: [1000000000000000000000],
  //   query: {
  //     enabled: !!address,   // ✅ 只有当 address 存在时才启用自动读取
  //   },
  // })
  // console.log('estimateETH', estimateETH);
  
  

  return (
    <div className="c-fomo3d">
      <Container>
        <Card>
          <Card.Body>
            <h2 className="card-title">Fomo3d 当前第<span className='h1'>{isLoadingCurrentRound ? '读取中...' : currentRound}</span>期</h2>
            
            <Card.Text>
              本轮奖金池<br/><span className='h4'>{isLoadingPrizePool ? '读取中...' : `${currentPrizePool ? Number(formatUnits(currentPrizePool, 18)).toFixed(10) : 0} OKB`}</span>
            </Card.Text>

            <div className='countdown-wrap'>
              {/* 测试1分钟 Math.floor(Date.now() / 1000) + 60 */}
              {!isLoadingRoundEndTime && roundEndTime >= 0 && (
                <CountdownTimer targetTimestamp={Number(roundEndTime)} />
              )}
            </div>
            
            {/* 奖励玩家的列表 */}
            {!isLoadingCurrentPlayerList && currentPlayerList && (
              <PlayerList list={currentPlayerList} />
            )}

            {/* 领取奖励 */}
            {rounds.length > 0 && (
              <ClaimReward 
                isLoadingBtn={isLoadingBtn}
                rounds={rounds}
                onClaim={async (round) => {
                  try {
                    setLoadingBtn(true)
                    const tx = await writeContractAsync({
                      address: fomo3dContractAddress,
                      abi: fomo3dAbi,
                      functionName: 'claim',
                      args: [round]
                    })
                    setTxHash(tx) // 保存交易哈希，等待确认后刷新奖励
                  } catch (err) {
                    setLoadingBtn(false)
                    console.error('领取失败:', err)
                  }
                }}
              />
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Fomo3d