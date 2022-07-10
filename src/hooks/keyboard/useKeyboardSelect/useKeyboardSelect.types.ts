interface UseKeyboardSelectParams {
  titles: string[]
  id?: number
  activeItem: string
  setActiveItem: (title: string) => void
}

type UseKeyboardSelectResult = (e: KeyboardEvent) => void

export type { UseKeyboardSelectParams, UseKeyboardSelectResult }
