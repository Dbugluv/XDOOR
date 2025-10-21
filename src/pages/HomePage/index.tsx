import arrowRight from '@/assets/images/arrowRight.png'
import copyIcon from '@/assets/images/copyIcon.png'
import blingYes from '@/assets/images/drake-hotline-bling-yes.png'
import echarts from '@/assets/images/echarts.png'
import fomo3d from '@/assets/images/fomo3d.png'
import meme1 from '@/assets/images/meme1.png'
import meme2 from '@/assets/images/meme2.png'
import nyanCat from '@/assets/images/nyan-cat.png'
import okb from '@/assets/images/okb.png'
import roadmapGif from '@/assets/images/roadmap.gif'
import roadmap from '@/assets/images/roadmap.png'
import tokenHeader from '@/assets/images/token-header.png'
import trollFace from '@/assets/images/trollface.png'
import xdSmile from '@/assets/images/xd-smile.gif'
import { Navigation } from '@/components/Navigator'
import { AirdropArea } from './components/AirdropArea'
import { DoorKeeper } from './components/DoorKeeper'
import { LiquidityRewards } from './components/LiquidityRewards'
import './index.scss'

const tokenDistribution = [
  {
    color: '#FF6E00',
    title: 'Part 1 90% — Community Airdrop',
    desc: 'Dedicated to active users and meme enthusiasts across BSC, Solana, and X-Layer ecosystems.',
  },
  {
    color: '#53B997',
    title: 'Part 2 4% — CEX Listing Reserve',
    desc: 'Reserved to provide initial liquidity, cover listing fees, and support marketing and promotional activities for future centralized exchange listings.',
  },
  {
    color: '#6750AA',
    title: 'Part 3 5.9% — Partnerships & Marketing Fund',
    desc: 'Allocated for brand building, community campaigns, collaborations with KOLs/influencers, and cross-project partnerships within the ecosystem.',
  },
  {
    color: '#376DF7',
    title: 'Part 4 0.1% — Initial Liquidity Pool (ILP)',
    desc: 'Used to establish the initial $XD–$OKB trading pair on DEXs. Ownership of this initial LP contract will be permanently renounced once $XD goes live.',
  },
]

export function HomePage() {
  const copyId = () => {
    navigator.clipboard.writeText('0x74836cC0E821A6bE18e407E6388E430B689C66e9')
  }

  return (
    <div className='x-door-home-page'>
      <div className='first-selection common-selection-style'>
        <Navigation />
        <div className='center-hint'>
          Each XDOOR is a key, and every $XD holder is a Door Opener.
        </div>
        <div className='home-page-content selection-content'>
          <div className='home-page-column'>
            <div className='x-door-selection introduction'>
              <div className='x-door-header'>What is XDOOR</div>
              <div className='x-ca-id'>
                CA:<span>{'0x74836cC0E821A6bE18e407E6388E430B689C66e9'}</span>
                <img src={copyIcon} onClick={copyId}></img>
              </div>
              <div className='x-door-paragraph'>
                The blockchain world is a vast universe of infinite
                possibilities — behind every door lies an unknown realm of
                opportunity and risk. You never know what awaits when you open
                the next door — it could be fortune and growth, or it could be
                danger and loss. Every door is a choice, and every push forward
                marks a turning point.
                <br />
                <div className='sentence' style={{ color: '#3E3BA199' }}>
                  XDOOR stands as the gateway to the unknown, a mysterious
                  entrance at the edge of the X-Layer world.
                </div>
                Each XDOOR represents a new beginning. Some hesitate before it.
                Others push forward with courage. Every brave decision can
                change your destiny.
                <br />
                <div className='sentence' style={{ color: '#00CD3C' }}>
                  A choice is not merely an action — it is the key to meeting
                  your fate.
                </div>
              </div>
            </div>
            <div className='x-door-selection'>
              <div className='x-door-header'>Why $XD</div>
              <div
                className='x-door-paragraph long-width'
                style={{ lineHeight: '25px' }}
              >
                In Internet culture, XD is an emoticon — a smiling face,
                symbolizing fearlessness and optimism. When you stand before a
                new door, you might feel uncertain, anxious, or afraid. But
                XDOOR gives you a belief — smile, and everything will be fine.
                Whether facing the volatility of the market or the surprise of
                unexpected fortune, we embrace it all with the same calm spirit
                — smiling through challenges, smiling toward the future.
                Wherever we are, whenever we face the unknown, we believe in one
                thing:
                <p style={{ color: '#FBC039' }}>
                  XD — everything is better when you face it with a smile.
                </p>
              </div>
            </div>
          </div>

          <div className='home-page-column'>
            <div className='fomo3d-area'>
              <div className='click-area'>
                <div className='click-to-enter'>Click to Enter</div>
                <img className='arrow' src={arrowRight} />
              </div>
              <img className='fomo3dImg' src={fomo3d} />
            </div>

            <div className='x-door-selection jackpot-pool'>
              <div className='sub-title'>JACKPOT POOL :</div>
              <div className='x-door-amount'>
                <div className='text'>{150.23} $OKB</div>
                <img src={okb} />
              </div>
              <div className='x-door-paragraph'>
                The Clock Is Ticking — <br />
                Dare to Be the Last?
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='second-selection common-selection-style'>
        <div className='x-door-header'>
          <img src={roadmap} />
        </div>
        <div className='x-door-selection'>
          <img src={trollFace} className='troll-face' />
          <img src={roadmapGif} className='roadmap-gif' />
          <img src={blingYes} className='bling-yes' />
        </div>
      </div>

      <AirdropArea />

      <div className='fourth-selection common-selection-style'>
        <div className='x-door-header'>$XD 100% Token Distribution Details</div>
        <div className='x-door-selection'>
          <div className='home-page-column'>
            <img src={echarts} className='echarts' />
          </div>

          <div className='home-page-column'>
            <img src={nyanCat} className='nyanCat' />
            <div className='list-wrapper'>
              {tokenDistribution.map((item, idx) => (
                <div className='list-item' key={idx}>
                  <div className='header' style={{ color: item.color }}>
                    <div
                      className='point'
                      style={{ backgroundColor: item.color }}
                    ></div>
                    {item.title}
                  </div>
                  {item.desc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='fifth-selection common-selection-style'>
        <div className='x-door-header'>
          <img src={tokenHeader} />
        </div>
        <div className='x-door-selection community-selection'>
          <div className='home-page-column'>
            <div className='title'>
              First 15 Days: 10%
              <br />
              After 15 Days: 2%
            </div>
            <div className='subtitle'>
              This tax is applied to every transaction. Note: the tax rate is
              10% during the first seven days after the project launch.
            </div>
            <div className='title'>Tax Distribution Via Smart Contract</div>
            <div className='subtitle'>
              30% → Burn (Deflationary Mechanism) 20% → Auto-LP (Automatically
              Added to Liquidity Pool) 14% → Marketing Fund 30% → Holder Rewards
              (Automatically Distributed via the Official Reward System) 6% →
              FOMO3D Prize Pool
            </div>
          </div>
          <div className='home-page-column'>
            <img src={xdSmile} className='xd-smile' />
          </div>
        </div>
      </div>

      <DoorKeeper />

      <LiquidityRewards />

      <div className='eighth-selection common-selection-style'>
        <div className='meme-wrapper'>
          <img src={meme1} />
          <img src={meme2} style={{ marginLeft: '36px' }} />
        </div>

        <div className='content'>
          The Philosophy of Doors
          <br />
          Door = Choice
          <br />
          The blockchain world is full of “doors.” Each door represents a
          decision — a path you choose to take in this boundless digital
          landscape. Which one will you open? Which direction will you go?
          <br />
          Door = Turning
          <br />
          Point Every door you open leads to a new world — a new journey into
          the unknown. It might be a land of opportunity or a descent into risk.
          Every step beyond the door reshapes your story.
          <br />
          Door = Faith
          <br />
          Only those who dare to open the door can see what lies beyond. To
          trust XDOOR is to embrace both challenge and possibility — it is to
          believe in the infinite potential of the X-Layer world. <br />
          Those who open the door with courage are destined for a different
          path.
        </div>
      </div>
      <div className='common-selection-style footer-wrapper'>
        <div className='x-door'>XDOOR</div>
        <div className='share-btn'> 1 2 3</div>
      </div>
    </div>
  )
}
