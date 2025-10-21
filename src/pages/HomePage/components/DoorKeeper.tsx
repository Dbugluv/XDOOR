import smileIcon from '@/assets/images/coin-icon.png'
import countIcon from '@/assets/images/countDown.png'
import headerImg from '@/assets/images/door-keeper.png'
import okb from '@/assets/images/okb.png'
import ClaimBtn from '@/components/ClaimBtn'
import { formatNumberWithCommas } from '@/utils/index'
import './DoorKeeper.scss'

export function DoorKeeper() {
  return (
    <div className='sixth-selection common-selection-style'>
      <div className='x-door-header'>
        <img src={headerImg} />
      </div>
      <div className='x-door-selection door-keeper-selection'>
        <div className='p-header'>Every Door You Guard Leads to Fortune</div>
        <div className='p-description'>
          Eligibility: Hold at least 100,000 $XD to qualify.
          <div className='divider' />
          Reward Source:
          <br /> 30% of all transaction taxes.
          <div className='divider' />
          Reward Cycle: <br />
          Rewards run on a 30-day countdown. Claim anytime within the cycle.
          <div className='divider' />
          Unclaimed Rewards:
          <br />
          At the end of each cycle —
          <br />
          • 50% added to the LP to boost liquidity.
          <br />• 50% sent to the FOMO3D prize pool for the next round.
        </div>
      </div>
      <div className='count-down'>
        <img src={countIcon} />
        <div>
          {29} day {'12:08:52'}
        </div>
      </div>
      <div className='panel-wrapper'>
        <div className='panel-card'>
          <div className='header'>
            <div className='title'>$OKB total rewards：</div>
            <div className='amount'>
              <img src={okb} />
              {formatNumberWithCommas(10000000000)}
            </div>
          </div>
        </div>
        <div className='panel-card second-card'>
          <div className='card-content'>
            <div className='header'>
              <div className='title'>$XD Balance</div>
            </div>
            <div className='content'>
              <img src={smileIcon} />
              {formatNumberWithCommas(2000000)}
            </div>
          </div>
        </div>
        <div className='panel-card third-card'>
          <div className='card-content'>
            <div className='header'>
              <div className='title'>Your Rewards</div>
            </div>

            <div className='content'>
              <div style={{ width: '100%' }}>
                <img src={okb} />
                {1.56}
              </div>

              <div className='btn-wrapper'>
                <ClaimBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
