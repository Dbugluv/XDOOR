import { Link, useLocation } from 'react-router-dom'
// import { useResponsive } from '@/hooks/useResponsive'
import xLogo from '@/assets/images/xdlogo.png'
import xDoor from '@/assets/images/xdoor.png'
import './index.scss'

export const Navigation = () => {
  const location = useLocation()
  // const { isMobile } = useResponsive()

  const navItems = [
    { path: '/airdrop', label: 'Airdrop' }, // 空投
    { path: '/tokenomics', label: 'Tokenomics' },
    { path: '/xdtime', label: 'XD Time' },
    { path: '/liquidityrewards', label: 'Liquidity Rewards' },
    { path: '/fomo3d', label: 'FOMO 3D' },
  ]

  return (
    <nav className={`x_door_navigation`}>
      <div className='x_door_navigation_brand'>
        <img src={xLogo} alt='XDOOR' className='x_door_navigation_logo' />
        <img src={xDoor} alt='XDOOR' className='x_door_navigation_header' />
      </div>
      <div className='x_door_navigation_menu'>
        {navItems.map(item => (
          <div key={item.path} className='x_door_navigation_item'>
            <Link
              to={item.path}
              className={`navigation_link ${
                location.pathname === item.path ? 'navigation_link-active' : ''
              }`}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          right: '60px',
          opacity: 0,
          pointerEvents: 'auto',
        }}
      >
        <appkit-button />
      </div>

      <div className='x_door_navigation_wallet_button'>
        <div className='x_door_navigation_button_shadow'>Connect Wallet</div>
      </div>
    </nav>
  )
}
