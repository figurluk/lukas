export function isScrolledIntoView(el, offsetPercentageOfHeight = null) {
  if (el == null) {
    return false
  }
  const rect = el.getBoundingClientRect()
  const elemTop = rect.top
  const elemBottom = rect.bottom
  if (offsetPercentageOfHeight !== null) {
    const eleHeightThreshold = rect.height * offsetPercentageOfHeight
    return elemTop >= 0 && elemTop + eleHeightThreshold <= window.innerHeight
  } else {
    return elemTop >= 0 && elemBottom <= window.innerHeight
  }
}
