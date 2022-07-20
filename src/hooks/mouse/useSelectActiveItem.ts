import { useState } from 'react'

// UseSelectItemResult
interface ActiveItem {
  title: string
  id: string
}

interface HookResult {
  activeItem: ActiveItem | {}
  setActiveItem: (params: ActiveItem) => void
  onSelectActiveItem: (params: ActiveItem) => void
}

type InitialValue = ActiveItem | {}

export const useSelectActiveItem = (initialValue: InitialValue): HookResult => {
  const [activeItem, setActiveItem] = useState<InitialValue>(initialValue)

  const onSelectActiveItem = (params: ActiveItem): void => {
    setActiveItem(params)
  }

  return {
    activeItem,
    setActiveItem,
    onSelectActiveItem,
  }
}
