import React, { RefObject } from 'react'
import { TitleBlock, Title } from './ListTitle.styles'

interface SidebarListTitleProps {
  title: string
  reference: RefObject<HTMLDivElement>
  toggleList: () => void
}

const ListTitle: React.FC<SidebarListTitleProps> = props => {
  const { title, reference, toggleList } = props

  return (
    <TitleBlock ref={reference} onClick={toggleList}>
      <Title>{title}</Title>
    </TitleBlock>
  )
}

export default ListTitle
