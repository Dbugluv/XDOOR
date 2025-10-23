// src/components/ResponsiveLayout.tsx
import '@/styles/responsive.css'
import { useEffect } from 'react'
import { useResponsive } from '../hooks/useResponsive'

interface ResponsiveLayoutProps {
  children: React.ReactNode
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  children,
}) => {
  const { deviceType, isMobile } = useResponsive()

  useEffect(() => {
    // 确保 body 有正确的设备类名
    document.body.className = document.body.className.replace(
      /\b(device-mobile|device-tablet|device-desktop)\b/g,
      ''
    )
    document.body.classList.add(`device-${deviceType}`)

    // PC端额外保护：强制固定字体大小
    if (!isMobile) {
      document.documentElement.style.fontSize = '16px'
      document.documentElement.style.setProperty(
        'font-size',
        '16px',
        'important'
      )
    }
  }, [deviceType, isMobile])

  return (
    <div className={`responsive-layout device-${deviceType} norem`}>
      {/* 开发调试信息 */}
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

      <div className={`layout-container ${deviceType}-layout norem`}>
        {children}
      </div>
    </div>
  )
}
