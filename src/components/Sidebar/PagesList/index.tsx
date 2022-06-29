import React from 'react'

import SidebarListItem from './ListItem'
import { IWorkspacePage } from '../../../redux/workSpaceSlice/types'
import styles from './SidebarList.module.scss'

interface SidebarListProps {
  pages: IWorkspacePage[] | IWorkspacePage
}

const SidebarList: React.FC<SidebarListProps> = ({ pages }) => {
  const listItemsHandler = () => {
    if (!Array.isArray(pages)) return <li>{pages.pageTitle}</li> //!

    return pages.map(page => <SidebarListItem key={page.id} page={page} />)
  }

  return (
    <div className={styles.root}>
      <ul>{listItemsHandler()}</ul>
    </div>
  )
}

export default SidebarList
