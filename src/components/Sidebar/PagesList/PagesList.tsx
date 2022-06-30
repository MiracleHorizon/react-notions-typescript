import React from 'react'

import SidebarListItem from './ListItem/ListItem'
import { IWorkspacePage } from 'redux/workSpaceSlice/types'
import { ListWrapper, List } from './PagesList.styles'

interface SidebarListProps {
  pages: IWorkspacePage[] | IWorkspacePage
}

const SidebarList: React.FC<SidebarListProps> = ({ pages }) => {
  const listItemsHandler = () => {
    if (!Array.isArray(pages)) return <li>{pages.title}</li> //!

    return pages.map(page => <SidebarListItem key={page.id} page={page} />)
  }

  return (
    <ListWrapper>
      <List>{listItemsHandler()}</List>
    </ListWrapper>
  )
}

export default SidebarList
