import React, { FC, useState } from 'react'

import DropdownContainer from 'components/ui/Dropdowns/DropdownContainer'
import { HeaderCommentsSvg } from 'components/ui/SVG'

import { StyledOption, Title } from '../CustomizePopupOption.styles'

const CommentsOption: FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Default')

  const onSelectActiveFilter = (filter: string): void => setActiveFilter(filter)

  return (
    <StyledOption>
      <HeaderCommentsSvg />
      <Title>Page comments</Title>
      <DropdownContainer
        activeFilter={activeFilter}
        onSelectActiveFilter={onSelectActiveFilter}
      />
    </StyledOption>
  )
}

export default CommentsOption
