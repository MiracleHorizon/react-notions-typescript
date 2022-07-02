interface Option {
  title: string
  action: () => void
}

interface UseKeyboardEnterParams {
  activeItem: string
  options: Option[]
}

type UseKeyboardEnterResult = (e: KeyboardEvent) => void

export type { UseKeyboardEnterParams, UseKeyboardEnterResult }
