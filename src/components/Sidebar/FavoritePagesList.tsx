import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useToggle } from 'hooks/useToggle'
import { useTooltipTitle } from 'hooks/useTooltipTitle'

import SidebarList from './PagesList/PagesList'
import ListTitle from './PagesList/ListTitle/ListTitle'
import Tooltip from 'shared/Tooltip/Tooltip'
import { favoritePagesSelector } from 'redux/workSpaceSlice/selectors'
import { PagesList } from './Sidebar.styles'

const FavoritePagesList: React.FC = () => {
  const { isOpen, toggleIsOpen } = useToggle(true)
  const tooltipTitle = useTooltipTitle(isOpen)
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
      {isListTitleHovering && (
        <Tooltip
          title={`Click to ${tooltipTitle} section`}
          description='Pages you have favorite.'
          coords={{ left: '5px', top: '-50px' }}
        />
      )}
      {isOpen && <SidebarList pages={favoritePages} />}
    </PagesList>
  )
}

export default FavoritePagesList
