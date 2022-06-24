import React from 'react'
import { useDispatch } from 'react-redux'

import SidebarListItem from './ListItem'

import { setActiveItem } from '../../../redux/sidebarSlice/slice'
import { IWorkspacePage } from '../../../redux/workSpaceSlice/types'

import styles from './SidebarList.module.scss'

interface ISidebarListProps {
  pages: IWorkspacePage[] | IWorkspacePage
}

const SidebarList: React.FC<ISidebarListProps> = ({ pages }) => {
  const dispatch = useDispatch()
  const onSelectItem = (i: number) => dispatch(setActiveItem(i))

  const listItemsHandler = () => {
    if (!Array.isArray(pages)) return <li>{pages.pageTitle}</li> //!

    return pages.map(({ id, pageTitle, pageImg }, index) => (
      <SidebarListItem
        key={index}
        id={id}
        title={pageTitle}
        img={pageImg}
        index={index}
        onSelect={onSelectItem}
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
