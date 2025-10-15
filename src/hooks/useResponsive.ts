// src/hooks/useResponsive.ts
import { useEffect, useState } from 'react'

export type DeviceType = 'mobile' | 'tablet' | 'desktop'

export const useResponsive = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop')

  // 检测真实设备类型
  const detectRealDevice = (): 'mobile' | 'tablet' | 'desktop' => {
    const width = window.innerWidth
    const height = window.innerHeight
    const userAgent = navigator.userAgent.toLowerCase()

    // 用户代理检测
    const isRealMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
    const isRealTablet = false; // 暂时不考虑平板
    // const isRealTablet = /ipad|android(?=.*mobile)/i.test(userAgent)

    // 控制台检测逻辑
    const isDevTools = process.env.NODE_ENV === 'development' ||
      (width < 768 && 
      height < 600 && 
      !isRealMobile && 
      !isRealTablet)

    console.log(`UA: ${userAgent}, 真实移动设备: ${isRealMobile}, 控制台 isDevTools: ${isDevTools}`)

    if (isDevTools) {
      return 'desktop' // 强制识别为桌面端
    }

    // 真实设备检测优先
    if (isRealMobile) return 'mobile'
    if (isRealTablet) return 'tablet'

    // 回退到基于尺寸的判断
    if (width <= 768) return 'mobile'
    if (width <= 1024) return 'tablet'
    return 'desktop'
  }

  useEffect(() => {
    const updateDeviceType = () => {
      const type = detectRealDevice()
      setDeviceType(type)
      
      // 应用字体大小
      const docEl = document.documentElement
      const width = window.innerWidth
      
      if (type === 'mobile') {
        docEl.style.fontSize = 100 * (width / 750) + 'px'
      } else {
        docEl.style.fontSize = '16px'
      }
    }

    updateDeviceType()

    let resizeTimer: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(updateDeviceType, 100)
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  return {
    deviceType,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    screenWidth: window.innerWidth
  }
}