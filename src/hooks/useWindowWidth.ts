/** @format */

import React from 'react'

function throttle(fn: React.Dispatch<React.SetStateAction<number>>, wait: number) {
  let x: NodeJS.Timeout
  return function(Width: number) {
    clearTimeout(x)
    x = setTimeout(() => {
      fn(Width)
    }, wait)
  }
}

const useWindowWidth = () => {
  const isBrowser = typeof window !== 'undefined'
  const [width, setWidth] = React.useState(isBrowser ? window.innerWidth : 0)

  const event = throttle(setWidth, 300)

  React.useEffect(() => {
    if (!isBrowser) return null
    const handleResize = () => event(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return width
}

export {useWindowWidth}
