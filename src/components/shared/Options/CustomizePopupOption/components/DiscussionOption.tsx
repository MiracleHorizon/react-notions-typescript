import React, { FC, useState } from 'react'

import DropdownContainer from 'components/ui/Dropdowns/DropdownContainer'
import { HeaderCommentsSvg } from 'components/ui/SVG'

import { StyledOption, Title } from '../CustomizePopupOption.styles'

const DiscussionOption: FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Expanded')

  const onSelectActiveFilter = (filter: string): void => setActiveFilter(filter)

  return (
    <StyledOption>
      <HeaderCommentsSvg />
      <Title>Top-level page discussions</Title>
      <DropdownContainer
        activeFilter={activeFilter}
        onSelectActiveFilter={onSelectActiveFilter}
      />
    </StyledOption>
  )
}

export default DiscussionOption
