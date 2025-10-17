import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Dividend.scss'

import { useState, useEffect } from 'react'

// 合约交互
import { useAppKitNetwork, useAppKitAccount } from '@reown/appkit/react'
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { formatUnits, parseUnits } from 'viem'   // ✅ 导入格式化函数
import dividendAbi from '../../config/dividendAbi'
import { dividendContractAddress } from '../../utils'


function Dividend () {
  const { address, isConnected } = useAppKitAccount(); // AppKit hook to get the address and check if the user is connected
  const { writeContractAsync } = useWriteContract()
  const [txHash, setTxHash] = useState(null)
  const [isLoadingBtn, setLoadingBtn] = useState(false);

  // ✅ 直接自动查询 pendingReward
  const { data: pendingReward, isLoading, refetch } = useReadContract({
    address: dividendContractAddress,
    abi: dividendAbi,
    functionName: 'pendingReward',
    args: [address],
    query: {
      enabled: !!address,   // ✅ 只有当 address 存在时才启用自动读取
      refetchInterval: 10000, // ✅ （可选）每 10 秒自动刷新一次
    },
  })

  // ✅ 直接自动查询 totalShares
  // const { data: totalShares } = useReadContract({
  //   address: dividendContractAddress,
  //   abi: dividendAbi,
  //   functionName: 'getTotalShares',
  //   query: {
  //     enabled: !!address,
  //   },
  // })
  // console.log('totalShares', totalShares);
  
  // ✅ 等待交易确认
  const { isSuccess: txConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  })

  // 👇 监听交易是否成功
  useEffect(() => {
    if (txConfirmed) {
      refetch() // 交易成功后刷新奖励
      setLoadingBtn(false)
    }
  }, [txConfirmed])
  
  return (
    <div className="c-dividend">
      <Container>
        <Card>
          <Card.Body>
            <h2 className="card-title">我的分红</h2>
            <Card.Text>
              当前可领取的分红：
              <span className='h3'>
                {isLoading ? '读取中...' : `${pendingReward ? Number(formatUnits(pendingReward, 18)).toFixed(4) : 0} TTK`}
              </span>
            </Card.Text>
            <Button
              variant="primary"
              disabled={isLoadingBtn || isLoading || !isConnected || pendingReward == 0}
              onClick={async () => {
                try {
                  setLoadingBtn(true)
                  const tx = await writeContractAsync({
                    address: dividendContractAddress,
                    abi: dividendAbi,
                    functionName: 'claim',
                  })
                  setTxHash(tx) // 保存交易哈希，等待确认后刷新奖励
                } catch (err) {
                  setLoadingBtn(false)
                  console.error('领取失败:', err)
                }
              }}
            >
              {isLoadingBtn ? '领取中…' : '领取奖励'}
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Dividend