import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useToggle } from 'hooks/useToggle'
import { useSetTooltipTitle } from 'hooks/useSetTooltipTitle'

import PagesList from './index'
import PagesListTitle from './ListTitle'
import Tooltip from 'shared/Tooltips/Tooltip'
import { favoritePagesSelector } from 'redux/workSpaceSlice/selectors'
import { Wrapper } from './PagesList.styles'

const FavoritePagesList: React.FC = () => {
  const { isOpen, toggleIsOpen } = useToggle(true)
  const favoritePages = useSelector(favoritePagesSelector)
  const tooltipTitle = useSetTooltipTitle(isOpen)

  const listTitleRef = useRef<HTMLDivElement>(null)
  const isListTitleHovering = useHover(listTitleRef)

  return (
    <Wrapper isOpen={isOpen}>
      <PagesListTitle
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
      {isOpen && <PagesList pages={favoritePages} />}
    </Wrapper>
  )
}

export default FavoritePagesList
