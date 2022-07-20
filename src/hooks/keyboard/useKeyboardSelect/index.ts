import { useCallback } from 'react'

import {
  UseKeyboardSelectParams as HookParams,
  UseKeyboardSelectResult as HookResult,
} from './useKeyboardSelect.types'

export const useKeyboardSelect = (params: HookParams): HookResult => {
  const { titles, activeItem, setActiveItem } = params

  return useCallback(
    (e: KeyboardEvent) => {
      const selectedItem = titles.find(title => title === activeItem)
      const selectedItemIndex = selectedItem && titles.indexOf(selectedItem)

      if (typeof selectedItemIndex === 'number') {
        switch (e.key) {
          case 'ArrowDown':
            selectedItemIndex + 1 !== titles.length
              ? setActiveItem(titles[selectedItemIndex + 1])
              : setActiveItem(titles[0])
            break
          case 'ArrowUp':
            selectedItemIndex !== 0
              ? setActiveItem(titles[selectedItemIndex - 1])
              : setActiveItem(titles[titles.length - 1])
            break
        }
      }

      if (typeof selectedItemIndex === 'undefined') {
        switch (e.key) {
          case 'ArrowDown':
            setActiveItem(titles[0])
            break
          case 'ArrowUp':
            setActiveItem(titles[titles.length - 1])
            break
        }
      }
    },
    [titles, activeItem, setActiveItem]
  )
}
