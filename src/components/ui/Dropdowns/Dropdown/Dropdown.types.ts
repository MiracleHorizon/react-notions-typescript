export default interface DropdownProps {
  handleClickOutside: () => void
  activeFilter: string
  onSelectActiveFilter: (filter: string) => void
}
