import { useEffect, useState } from 'react'
import { setFlexible, removeFlexible } from '../utils/flexible'

export type DeviceType = 'mobile' | 'tablet' | 'desktop'

export const useResponsive = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop')
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      // 防止控制台误判
      const isLikelyDevTools = width < 768 && height < 500

      let type: DeviceType = 'desktop'

      if (width <= 768 && !isLikelyDevTools) {
        type = 'mobile'
      } else if (width <= 1024 && !isLikelyDevTools) {
        type = 'tablet'
      } else {
        type = 'desktop'
      }

      // 只有在设备类型真正改变时才更新
      setDeviceType(prevType => {
        if (prevType !== type) {
          applyResponsiveSettings(prevType, type)
          return type
        }
        return prevType
      })
    }

    const applyResponsiveSettings = (
      prevType: DeviceType,
      newType: DeviceType
    ) => {
      // 只有在设备类型变化时才应用设置
      if (prevType === newType && initialized) return

      console.log(`设备类型变化: ${prevType} -> ${newType}`)

      if (newType === 'mobile') {
        // 移动端启用 flexible
        setFlexible()
        document.documentElement.classList.add('device-mobile')
        document.documentElement.classList.remove(
          'device-desktop',
          'device-tablet'
        )
      } else {
        // PC端和平板禁用 flexible，固定字体大小
        removeFlexible()
        document.documentElement.style.fontSize = '16px'

        if (newType === 'desktop') {
          document.documentElement.classList.add('device-desktop')
          document.documentElement.classList.remove(
            'device-mobile',
            'device-tablet'
          )
        } else {
          document.documentElement.classList.add('device-tablet')
          document.documentElement.classList.remove(
            'device-mobile',
            'device-desktop'
          )
        }
      }

      if (!initialized) setInitialized(true)
    }

    // 初始化
    checkDeviceType()

    let resizeTimer: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(checkDeviceType, 250) // 增加防抖时间
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
      removeFlexible()
    }
  }, [initialized])

  return {
    deviceType,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    screenWidth: window.innerWidth,
  }
}
