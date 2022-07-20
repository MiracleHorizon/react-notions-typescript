import React, { FC, memo } from 'react'

import Props from '../OptionsList/SidebarOptionsPanel/OptionsPanelItem/OptionsPanelItem.types'
import { Container, Title } from './CommentPopupOption.styles'

const CommentPopupOption: FC<Props> = memo(props => {
  const { title, IconSvg, onClickAction } = props

  return (
    <Container onClick={onClickAction}>
      <IconSvg />
      <Title>{title}</Title>
    </Container>
  )
})

export default CommentPopupOption
