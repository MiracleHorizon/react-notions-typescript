import React, { FC, memo } from 'react'
import Props from './ListTitle.types'
import { TitleBlock, Title } from './ListTitle.styles'

const PagesListTitle: FC<Props> = memo(props => {
  const { title, reference, onToggleList } = props

  return (
    <TitleBlock ref={reference} onClick={onToggleList}>
      <Title>{title}</Title>
    </TitleBlock>
  )
})

export default PagesListTitle
