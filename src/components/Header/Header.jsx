import { Link, useLocation } from 'react-router-dom' // 引入 Link 和 useLocation

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import './Header.scss'

function Header() {
  const location = useLocation() // 获取当前的路由信息

  // 获取当前路径，用于判断哪个导航项是选中的
  const isActive = path => (location.pathname === path ? 'active' : '')

  return (
    <header className='c-header'>
      <Navbar collapseOnSelect expand='lg' fixed='top'>
        <Container>
          <Navbar.Brand>XDOOR</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              {/* 代币功能链接，首页内容 */}
              <Nav.Link as={Link} to='/' className={isActive('/')}>
                代币功能
              </Nav.Link>

              {/* 空投链接 */}
              <Nav.Link
                as={Link}
                to='/airdrop'
                className={isActive('/airdrop')}
              >
                空投功能
              </Nav.Link>

              {/* 二池链接 */}
              <Nav.Link as={Link} to='/poolv2' className={isActive('/poolv2')}>
                二池功能
              </Nav.Link>
            </Nav>
            <Nav>
              <appkit-button />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
