import arrow from '@/assets/images/arrowRight.png'
import box from '@/assets/images/coin-box.png'
import xdCoin from '@/assets/images/coin-icon.png'
import coins from '@/assets/images/coins.gif'
import okb from '@/assets/images/okb.png'
import { formatNumberWithCommas } from '@/utils/index'
import { useState } from 'react'
import './LiquidityRewards.scss'

export function LiquidityRewards() {
  const percentage = [25, 50, 75, 100]
  const [inputValue, setInputValue] = useState(0)
  const [inputingType, setInputingType] = useState<'xd' | 'okb' | null>(null)
  const [chosenXdPercentage, setXdChosenPercentage] = useState<number | null>(
    null
  )
  const [chosenOkbPercentage, setOkbChosenPercentage] = useState<number | null>(
    null
  )

  const handleInputClick = (type: string) => {
    console.log('type', type)

    setInputingType(type as 'xd' | 'okb')
  }

  const handlePercentageClick = (percentage: number, type: string) => {
    console.log('percentage', percentage, type)
    if (type === 'xd') {
      setXdChosenPercentage(percentage)
    } else if (type === 'okb') {
      setOkbChosenPercentage(percentage)
    }
  }

  return (
    <div className='seventh-selection common-selection-style'>
      <div className='x-door-header'>Liquidity Rewards</div>
      <div className='x-door-selection door-keeper-selection'>
        <div className='home-page-column'>
          <div className='card-block'>
            <img src={coins} className='coins-gif' />

            <div className='tvl'>Total Value Locked (TVL)</div>
            <div className='tvl-amount'> ${formatNumberWithCommas(665651)}</div>

            <div className='currency-block'>
              <div className='left-block'>
                <div className='row'>
                  <img src={xdCoin} className='xd-coin' />
                  <span className='title'>$XD</span>
                </div>

                <div className='xd-amount'>
                  ${formatNumberWithCommas(1000000)}
                </div>
              </div>

              <div className='right-block'>
                <div className='row'>
                  <img src={okb} className='xd-coin' />
                  <span className='title'>OKB</span>
                </div>

                <div className='xd-amount'>
                  ${formatNumberWithCommas(1000000)}
                </div>
              </div>
            </div>

            <div className='divider'></div>

            <div className='currency-block'>
              <div className='left-block'>
                <div className='row'>
                  <span className='title'>APY</span>
                </div>

                <div className='xd-amount'>{106}%</div>
              </div>

              <div className='right-block'>
                <div className='row'>
                  <span className='title'>Lock-up period</span>
                </div>

                <div className='xd-amount'>{14} Day</div>
              </div>
            </div>
          </div>
          <div className='card-block'>
            <div className='xd-add-okb-header'>
              <div className='left-block'>
                <div className='row'>
                  <img src={xdCoin} className='xd-coin' />
                  <span className='title'>$XD</span>
                </div>
              </div>
              <div className='plus'>+</div>
              <div className='right-block'>
                <div className='row'>
                  <img src={okb} className='xd-coin' />
                  <span className='title'>OKB</span>
                </div>
              </div>
            </div>
            <div className='deposit-amount-txt'>Deposit Amount</div>

            <div
              className={`balance-amount-input ${
                inputingType === 'xd' ? 'input-active' : ''
              }`}
              onClick={() => handleInputClick('xd')}
            >
              <div className='row'>
                <img src={xdCoin} className='xd-coin' />
                <span className='title'>$XD</span>
              </div>

              <div className='balance-amount'>
                Balance: {formatNumberWithCommas(134356530250.55)}
              </div>
              <div className='input-area'>
                <div className='input-number'>{1034}</div>
                <div className='percentage-list'>
                  {percentage.map(item => (
                    <div
                      className={`percentage-block ${item === chosenXdPercentage ? 'active' : ''}`}
                      key={item}
                      onClick={() => handlePercentageClick(item, 'xd')}
                    >
                      {item}%
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`balance-amount-input ${
                inputingType === 'okb' ? 'input-active' : ''
              }`}
              onClick={() => handleInputClick('okb')}
            >
              <div className='row'>
                <img src={okb} className='xd-coin' />
                <span className='title'>OKB</span>
              </div>
              <div className='balance-amount'>
                Balance: {formatNumberWithCommas(134356530250.55)}
              </div>
              <div className='input-area'>
                <div className='input-number'>{0.0}</div>
                <div className='percentage-list'>
                  {percentage.map(item => (
                    <div
                      className={`percentage-block ${item === chosenOkbPercentage ? 'active' : ''}`}
                      key={item}
                      onClick={() => handlePercentageClick(item, 'okb')}
                    >
                      {item}%
                    </div>
                  ))}
                </div>
              </div>
              <div className='btn-wrapper'>Confirm</div>
            </div>
          </div>
          <div className='card-block my-position-block'>
            <div>My Position</div>
            <img src={arrow} />
          </div>
        </div>
        <div className='home-page-column right-column'>
          <img className='box-coin' src={box} />
        </div>
      </div>
    </div>
  )
}
