import { useState, useEffect } from "react"

export default function useResizeObserver(refToObserve) {

  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {

    const observer = new ResizeObserver((entries) => {
      const { height, width } = entries[0].contentRect
      setDimensions({ height, width })
    })

    if (refToObserve.current) {
      observer.observe(refToObserve.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [refToObserve.current])

  return dimensions
}
