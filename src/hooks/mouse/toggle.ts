import { useState } from 'react'

interface UseToggleResult {
  isActive: boolean
  toggleActive: () => void
}

export const useToggle = (initialState: boolean): UseToggleResult => {
  const [isActive, setActive] = useState<boolean>(initialState)

  const toggleActive = (): void => setActive(!isActive)

  return {
    isActive,
    toggleActive,
  }
}
