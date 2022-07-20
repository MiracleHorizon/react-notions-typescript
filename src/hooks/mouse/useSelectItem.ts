import { useCallback, useState } from 'react'

interface UseSelectItemResult {
  activeItem: string
  setActiveItem: (value: string) => void
  onSelectItem: (value: string) => void
}

export const useSelectItem = (initialValue: string): UseSelectItemResult => {
  const [activeItem, setActiveItem] = useState<string>(initialValue)

  const onSelectItem = useCallback((value: string): void => {
    setActiveItem(value)
  }, [])

  return {
    activeItem,
    setActiveItem,
    onSelectItem,
  }
}
