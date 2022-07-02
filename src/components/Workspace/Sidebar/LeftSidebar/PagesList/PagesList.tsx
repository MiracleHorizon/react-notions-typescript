import React from 'react'

import SidebarListItem from './ListItem/ListItem'
import { PagesListProps } from './PagesList.types'
import { Container, List } from './PagesList.styles'

const PagesList: React.FC<PagesListProps> = ({ pages }) => {
  const listItemsHandler = (): JSX.Element | JSX.Element[] => {
    if (!Array.isArray(pages)) return <SidebarListItem page={pages} />

    return pages.map(page => <SidebarListItem key={page.id} page={page} />)
  }

  return (
    <Container>
      <List>{listItemsHandler()}</List>
    </Container>
  )
}

export default PagesList
