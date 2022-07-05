import { useEffect, useState } from 'react'

export const useSetTooltipTitle = (isOpen: boolean): string => {
  const [tooltipTitle, setTooltipTitle] = useState<string>('')

  useEffect(() => {
    isOpen ? setTooltipTitle('hide') : setTooltipTitle('show')
  }, [isOpen])

  return tooltipTitle
}
