import React, { FC, memo } from 'react'

import { ChevronDownSvg } from 'components/ui/SVG'
import { TitleContainer, Title } from './DropdownTitle.styles'

interface Props {
  activeFilter: string
  onClick: () => void
}

const DropdownTitle: FC<Props> = memo(({ activeFilter, onClick }) => {
  return (
    <TitleContainer tabIndex={0}>
      <Title onClick={onClick}>{activeFilter}</Title>
      <ChevronDownSvg />
    </TitleContainer>
  )
})

export default DropdownTitle
