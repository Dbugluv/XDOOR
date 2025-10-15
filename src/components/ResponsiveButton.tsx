import { useResponsive } from '../hooks/useResponsive'

interface ResponsiveButtonProps {
  onClick?: () => void
  children: React.ReactNode
}

export const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({ 
  onClick, 
  children 
}) => {
  const { isMobile, isDesktop } = useResponsive()

  const buttonStyle = {
    // 移动端使用 rem，PC端使用固定 px
    padding: isMobile ? '0.5rem 1rem' : '12px 24px',
    fontSize: isMobile ? '0.875rem' : '14px',
    borderRadius: isMobile ? '0.25rem' : '4px',
    border: 'none',
    backgroundColor: '#007acc',
    color: 'white',
    cursor: 'pointer',
    width: isMobile ? 'auto' : '200px'
  }

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children} {isMobile ? '(Mobile)' : isDesktop ? '(Desktop)' : '(Tablet)'}
    </button>
  )
}