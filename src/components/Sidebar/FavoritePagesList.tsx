import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useToggle } from 'hooks/useToggle'

import SidebarList from './PagesList/PagesList'
import ListTitle from './PagesList/ListTitle/ListTitle'
import SidebarListTooltip from 'shared/Tooltips/SidebarList'
import { favoritePagesSelector } from 'redux/workSpaceSlice/selectors'
import { PagesList } from './Sidebar.styles'

const FavoritePagesList: React.FC = () => {
  const { isOpen, toggleIsOpen } = useToggle(true)
  const favoritePages = useSelector(favoritePagesSelector)

  const listTitleRef = useRef<HTMLDivElement>(null)
  const isListTitleHovering = useHover(listTitleRef)

  return (
    <PagesList>
      <ListTitle
        title='Favorites'
        reference={listTitleRef}
        toggleList={toggleIsOpen}
      />
      {isOpen && <SidebarList pages={favoritePages} />}
      {isListTitleHovering && (
        <SidebarListTooltip
          isOpen={isOpen}
          description={'Pages you have favorite.'}
        />
      )}
    </PagesList>
  )
}

export default FavoritePagesList
