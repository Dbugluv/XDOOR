import { Link, useLocation } from 'react-router-dom'
import { useResponsive } from '../../hooks/useResponsive'
import './index.scss'

export const Navigation = () => {
  const location = useLocation()
  const { isMobile } = useResponsive()

  const navItems = [
    { path: '/home', label: '首页' },
    { path: '/about', label: '关于' },
    { path: '/contact', label: '联系' }
  ]

  return (
    <nav className={`navigation ${isMobile ? 'navigation--mobile' : 'navigation--desktop'}`}>
      <div className="navigation__brand">
        <Link to="/">Your Logo</Link>
      </div>
      
      <ul className="navigation__list">
        {navItems.map((item) => (
          <li key={item.path} className="navigation__item">
            <Link 
              to={item.path}
              className={`navigation__link ${
                location.pathname === item.path ? 'navigation__link--active' : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}