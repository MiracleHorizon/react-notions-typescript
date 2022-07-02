interface Option {
  title: string
  onClick: () => void
}

interface UseKeyboardEnterParams {
  activeItem: string
  options: Option[]
}

type UseKeyboardEnterResult = (e: KeyboardEvent) => void

export type { UseKeyboardEnterParams, UseKeyboardEnterResult }
