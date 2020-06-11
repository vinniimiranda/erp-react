import { useLayoutEffect, useState } from 'react'

export function useResponsive(breakpoint = 1024) {
  const [responsive, setResponsive] = useState(false)
  useLayoutEffect(() => {
    function updateSize() {
      setResponsive(window.innerWidth <= breakpoint)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [breakpoint])
  return responsive
}
