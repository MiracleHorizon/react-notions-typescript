interface IOnToggleListParams {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const onToggleList = (params: IOnToggleListParams) => {
  const { isOpen, setIsOpen } = params
  setIsOpen(!isOpen)
}

export { onToggleList }
