import { useResponsive } from '../hooks/useResponsive'
import '../styles/responsive.css'
interface ResponsiveLayoutProps {
  children: React.ReactNode
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  children,
}) => {
  const { deviceType, isMobile, isDesktop, isTablet } = useResponsive()

  return (
    <div className={`responsive-layout device-${deviceType}`}>
      {/* 设备指示器 - 开发时使用 */}
      {process.env.NODE_ENV === 'development' && (
        <div
          style={{
            position: 'fixed',
            top: 10,
            right: 10,
            background: '#007acc',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: '12px',
            zIndex: 1000,
          }}
        >
          {deviceType.toUpperCase()} - {window.innerWidth}px
        </div>
      )}

      <div className={`layout-container ${deviceType}-layout`}>{children}</div>
    </div>
  )
}
