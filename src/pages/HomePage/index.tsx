import arrowRight from '@/assets/images/arrowRight.png'
import coolImg from '@/assets/images/cool.png'
import copyIcon from '@/assets/images/copyIcon.png'
import fomo3d from '@/assets/images/fomo3d.png'
import roadmap from '@/assets/images/roadmap.png'
import './index.scss'

export function HomePage() {
  return (
    <div className='x-door-home-page'>
      <div className='first-selection'>
        <div className='home-page-content'>
          <div className='home-page-column'>
            <div className='x-door-selection'>
              <div className='x-door-header'>What is XDOOR</div>
              <div className='x-door-paragraph'>
                The blockchain world is a vast universe of infinite
                possibilities — behind every door lies an unknown realm of
                opportunity and risk. You never know what awaits when you open
                the next door — it could be fortune and growth, or it could be
                danger and loss. Every door is a choice, and every push forward
                marks a turning point. XDOOR stands as the gateway to the
                unknown, a mysterious entrance at the edge of the X-Layer world.
                Each XDOOR represents a new beginning. Some hesitate before it.
                Others push forward with courage. Every brave decision can
                change your destiny. A choice is not merely an action — it is
                the key to meeting your fate.
              </div>
            </div>
            <div className='x-door-selection'>
              <div className='x-door-header'>Why $XD</div>
              <div className='x-door-paragraph'>
                In Internet culture, XD is an emoticon — a smiling face,
                symbolizing fearlessness and optimism. When you stand before a
                new door, you might feel uncertain, anxious, or afraid. But
                XDOOR gives you a belief — smile, and everything will be fine.
                Whether facing the volatility of the market or the surprise of
                unexpected fortune, we embrace it all with the same calm spirit
                — smiling through challenges, smiling toward the future.
                Wherever we are, whenever we face the unknown, we believe in one
                thing: XD — everything is better when you face it with a smile.
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
              <div className='x-door-header'>150.23 OKB</div>
              <div className='x-door-paragraph'>
                The Philosophy of Doors Door = Choice The blockchain world is
                full of “doors.” Each door represents a decision — a path you
                choose to take in this boundless digital landscape. Which one
                will you open? Which direction will you go? Door = Turning Point
                Every door you open leads to a new world — a new journey into
                the unknown. It might be a land of opportunity or a descent into
                risk. Every step beyond the door reshapes your story. Door =
                Faith Only those who dare to open the door can see what lies
                beyond. To trust XDOOR is to embrace both challenge and
                possibility — it is to believe in the infinite potential of the
                X-Layer world. Those who open the door with courage are destined
                for a different path.
              </div>

              <div className='x-ca-id'>
                CA:0x74836cC0E821A6bE18e407E6388E430B689C66e9
                <img src={copyIcon}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='second-selection'>
        <img src={roadmap} />
      </div>
    </div>
  )
}
