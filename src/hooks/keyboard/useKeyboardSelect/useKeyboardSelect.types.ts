export interface UseKeyboardSelectParams {
  titles: string[]
  id?: number
  activeItem: string
  setActiveItem: (title: string) => void
}

export type UseKeyboardSelectResult = (e: KeyboardEvent) => void
