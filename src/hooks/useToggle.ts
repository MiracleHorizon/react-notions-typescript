import { useState } from 'react'

interface UseToggleResult {
  isOpen: boolean
  toggleIsOpen: () => void
}

export const useToggle = (initialState: boolean): UseToggleResult => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState)

  const toggleIsOpen = (): void => setIsOpen(!isOpen)

  return {
    isOpen,
    toggleIsOpen,
  }
}
