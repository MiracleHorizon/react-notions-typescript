import { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useEventListener } from 'usehooks-ts'

import { UseResizeParams as HookParams } from './useResize.types'

const useResize = (params: HookParams): boolean => {
  const {
    direction,
    references: { node, resizer },
    restrictions: { minWidth, maxWidth },
    setWidth,
  } = params
  const [isResizingEnabled, setResizingEnabled] = useState<boolean>(false)
  const dispatch = useDispatch()

  const startPosition = useRef<number>(0)
  const nodeRect = node.current?.getBoundingClientRect()

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      if (!resizer.current || !nodeRect) return

      if (e.composedPath().includes(resizer.current)) {
        e.preventDefault()

        setResizingEnabled(true)
        startPosition.current = nodeRect.x
      }
    },
    [nodeRect, resizer]
  )

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!resizer.current || !isResizingEnabled || !nodeRect) return

      let width: number

      switch (direction) {
        case 'Left':
          width = nodeRect.right - e.clientX
          break
        case 'Right':
          width = startPosition.current + e.clientX
          break
        case 'Top':
          //...if it is needed
          return
        case 'Bottom':
          // ...if it is needed
          return
        default:
          width = nodeRect.width
          break
      }

      if (width <= maxWidth && width >= minWidth) {
        dispatch(setWidth(width))
      }
    },
    [
      isResizingEnabled,
      direction,
      resizer,
      nodeRect,
      maxWidth,
      minWidth,
      dispatch,
      setWidth,
    ]
  )

  const onMouseUp = useCallback(
    (e: MouseEvent) => {
      if (!resizer.current || !isResizingEnabled) return

      if (!e.composedPath().includes(resizer.current)) {
        setResizingEnabled(false)
      }

      setResizingEnabled(false)
    },
    [resizer, isResizingEnabled]
  )

  useEventListener('mousedown', onMouseDown)
  useEventListener('mousemove', onMouseMove)
  useEventListener('mouseup', onMouseUp)

  return isResizingEnabled
}

export default useResize //!
