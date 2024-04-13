export const isRedirectToLaunch = () => {
  // 上次展示启动页的时间
  const _sc_showLaunchPageTime = localStorage.getItem("_sc_showLaunchPageTime")
  const now = Date.now()
  if (!_sc_showLaunchPageTime || _sc_showLaunchPageTime - now > 1000 * 60 * 60 * 24) { // 24小时过期，重新展示启动页
    localStorage.setItem("_sc_showLaunchPageTime", now)
    return true
  }
}