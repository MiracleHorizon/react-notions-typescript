import { EmptyPageOption } from 'redux/optionsSlice/types'

interface EmptyPageListProps {
  list: EmptyPageOption[]
  activeItem: string
  onSelect: (title: string) => void
  setActiveItem?: (title: string) => void
}

export type { EmptyPageListProps }
