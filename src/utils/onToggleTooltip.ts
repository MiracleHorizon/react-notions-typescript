interface IOnToggleTooltip {
  isTooltipOpen: boolean
  setIsTooltipOpen: (isTooltipOpen: boolean) => void
}

const onToggleTooltip = (params: IOnToggleTooltip): void => {
  const { isTooltipOpen, setIsTooltipOpen } = params
  setIsTooltipOpen(!isTooltipOpen)
}

export { onToggleTooltip }
