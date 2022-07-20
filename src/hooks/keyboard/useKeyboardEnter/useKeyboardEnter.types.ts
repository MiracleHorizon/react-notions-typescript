interface Option {
  title: string
  action: () => void
}

export interface UseKeyboardEnterParams {
  activeItem: string
  options: Option[]
}

export type UseKeyboardEnterResult = (e: KeyboardEvent) => void
