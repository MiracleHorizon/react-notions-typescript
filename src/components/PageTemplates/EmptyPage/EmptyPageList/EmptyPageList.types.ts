import { EmptyPageOption } from 'redux/reducers/optionsSlice/types'

export default interface EmptyPageListProps {
  list: EmptyPageOption[]
  activeItem: string
  onSelect: (title: string) => void
  setActiveItem?: (title: string) => void
}
