import AirHeader from '@/assets/images/airHeader.png'
import coinIcon from '@/assets/images/coin-icon.png'
import countDown from '@/assets/images/countDown.png'
import Fail from '@/assets/images/fail.png'
import fileIcon from '@/assets/images/file.png'
import FirstWay from '@/assets/images/first-way.png'
import progressIcon from '@/assets/images/progressIcon.png'
import SecondWay from '@/assets/images/second-way.png'
import Success from '@/assets/images/success.png'
import ThirdWay from '@/assets/images/third-way.png'
import { formatNumberWithCommas } from '@/utils/index'
import { useEffect, useState } from 'react'
import './AirdropArea.scss'

const mockList = [
  {
    isQualified: false,
    detail: 'PancakeSwap: Cumulative trading volume of at least $1,000',
  },
  {
    isQualified: true,
    detail: 'Four.meme: Internal trading volume of at least $50',
  },
  { isQualified: true, detail: 'Hold at least 100 XDO in your wallet' },
  { isQualified: true, detail: 'Participate in at least 3 community events' },
]
export function AirdropArea() {
  const [list, setList] = useState<any[]>([...mockList])

  // 获取资格接口
  const fetchQualification = async () => {
    // const res = await fetch('/api/qualification')
    // const data = await res.json()
    // setList(data)
  }

  const connectWallet = () => {}

  useEffect(() => {
    fetchQualification()
  }, [])

  return (
    <div className='third-selection common-selection-style'>
      <div className='x-door-header'>
        <img src={AirHeader} />
        <div className='count-down'>
          <img src={countDown} />
          07:00:00:00
        </div>
      </div>
      <div className='sub-title'>Check your wallet. claim your airdrop</div>

      <div className='wallet-area-wrapper'>
        <div className='first-way'>
          <div className='main-img-wrapper'>
            <img src={FirstWay} />
            <div className='connect-wallet-btn' onClick={connectWallet}>
              Connect wallet
            </div>
          </div>
          <div className='qualified-list'>
            {list.map((item, index: number) => (
              <div
                key={index}
                className={`list-item ${item.isQualified ? 'qualified' : 'unqualified'}`}
              >
                <img src={item.isQualified ? Success : Fail} />
                {item.detail}
              </div>
            ))}
          </div>
        </div>
        <div className='second-way'>
          <div className='main-img-wrapper'>
            <img src={SecondWay} />
            <div className='connect-wallet-btn' onClick={connectWallet}>
              Connect wallet
            </div>
          </div>
          <div className='qualified-list'>
            {[...list, ...list].map((item, index: number) => (
              <div
                key={index}
                className={`list-item ${item.isQualified ? 'qualified' : 'unqualified'}`}
              >
                <img src={item.isQualified ? Success : Fail} />
                {item.detail}
              </div>
            ))}
          </div>
        </div>
        <div className='third-way'>
          <div className='main-img-wrapper'>
            <img src={ThirdWay} />
            <div className='connect-wallet-btn' onClick={connectWallet}>
              Connect wallet
            </div>
          </div>
          <div className='qualified-list'>
            {list.map((item, index: number) => (
              <div
                key={index}
                className={`list-item ${item.isQualified ? 'qualified' : 'unqualified'}`}
              >
                <img src={item.isQualified ? Success : Fail} />
                {item.detail}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='claim-progress-wrapper'>
        <div className='row'>
          <div className='claimed'>Claimed: 123,132,123,123,123</div>
          <div className='airdrop-total'>
            Airdrop total: 13,333,333,333,333,333,333
          </div>
        </div>
        <div className='progress-bar'>
          <div className='progress-fill' style={{ width: '70%' }}>
            <div style={{ position: 'relative' }}>
              <div className='progress-percentage'>{70}%</div>
              <div className='circle'>
                <img src={progressIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className='description'>
          As $XD airdrop claims progress, the number of tokens claimable will
          decrease by 20% every time 5% of the total supply is claimed.
        </div>
      </div>

      <div className='block-area'>
        <div className='airdrop-block block'>
          <div className='header'>Your $XD Airdrop:</div>
          <div className='content'>
            <img src={coinIcon} />{' '}
            <span className='number'>
              {formatNumberWithCommas(140000000000)}
            </span>
            <div className='minus-coin'>
              {formatNumberWithCommas(140000000000)}
            </div>
          </div>
          <div className='claim-btn'> Claim</div>
        </div>

        <div className='invite-block block'>
          <div className='header'>
            Invite:
            <div className='details-btn'>
              <img src={fileIcon} />
              <div className='btn'>View Award Details</div>
            </div>
          </div>
          <div className='content'>{256}</div>

          <div className='invite-introduction'>
            Invite your friends and get 9% of their $XD airdrop as a reward.
            Plus, earn an extra 3% from the friends they invite
          </div>

          <div className='copy-link-btn'> Copy Link</div>
        </div>
      </div>
    </div>
  )
}
