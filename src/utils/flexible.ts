let flexibleHandler: (() => void) | null = null

/**
 * 移动端字体大小设置（替代 amfe-flexible）
 */
export const setFlexible = () => {
  const docEl = document.documentElement

  const recalc = () => {
    const clientWidth = docEl.clientWidth
    if (!clientWidth) return

    if (clientWidth >= 750) {
      docEl.style.fontSize = '100px'
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
  }

  // 保存处理函数引用，以便后续移除
  flexibleHandler = recalc

  // 移除之前的监听器
  removeFlexible()

  // 添加新的监听器
  window.addEventListener('resize', flexibleHandler, false)
  document.addEventListener('DOMContentLoaded', flexibleHandler, false)
  recalc()
}

/**
 * 移除 flexible 监听器
 */
export const removeFlexible = () => {
  if (flexibleHandler) {
    window.removeEventListener('resize', flexibleHandler, false)
    document.removeEventListener('DOMContentLoaded', flexibleHandler, false)
    flexibleHandler = null
  }
  // PC端固定字体大小
  document.documentElement.style.fontSize = '16px'
}
