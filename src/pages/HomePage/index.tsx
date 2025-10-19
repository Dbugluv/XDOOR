import arrowRight from '@/assets/images/arrowRight.png'
import coolImg from '@/assets/images/cool.png'
import copyIcon from '@/assets/images/copyIcon.png'
import blingYes from '@/assets/images/drake-hotline-bling-yes.png'
import fomo3d from '@/assets/images/fomo3d.png'
import roadmapGif from '@/assets/images/roadmap.gif'
import roadmap from '@/assets/images/roadmap.png'
import trollFace from '@/assets/images/trollface.png'
import { Navigation } from '@/components/Navigator'
import { AirdropArea } from './components/AirdropArea'
import './index.scss'

export function HomePage() {
  return (
    <div className='x-door-home-page'>
      <div className='first-selection common-selection-style'>
        <Navigation />

        <div className='home-page-content selection-content'>
          <div className='home-page-column'>
            <div className='x-door-selection introduction'>
              <div className='x-door-header'>What is XDOOR</div>
              <div className='x-ca-id'>
                CA:0x74836cC0E821A6bE18e407E6388E430B689C66e9
                <img src={copyIcon}></img>
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
            <div className='x-center-column'>
              <div className='x-door-cool-image'>
                <img src={coolImg} />
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
              <div className='x-door-header'>150.23 OKB</div>
              <div className='x-door-paragraph'></div>
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

      <div className='common-selection-style footer-wrapper'>
        <div className='x-door'>XDOOR</div>
        <div className='share-btn'>1 2 3 </div>
      </div>
    </div>
  )
}
