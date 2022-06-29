import React from 'react'

import SidebarListItem from './ListItem'
import { IWorkspacePage } from '../../../redux/workSpaceSlice/types'
import styles from './SidebarList.module.scss'
import { PagesListProps } from '../index'

interface ISidebarListProps extends PagesListProps {
  pages: IWorkspacePage[] | IWorkspacePage
}

const SidebarList: React.FC<ISidebarListProps> = props => {
  const { pages, activeItem, onSelect } = props

  const listItemsHandler = () => {
    if (!Array.isArray(pages)) return <li>{pages.pageTitle}</li> //!

    return pages.map(page => (
      <SidebarListItem
        key={page.id}
        page={page}
        activeItem={activeItem}
        onSelect={onSelect}
      />
    ))
  }

  return (
    <div className={styles.root}>
      <ul>{listItemsHandler()}</ul>
    </div>
  )
}

export default SidebarList
