import React, { FC, memo, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import PagesList from '../index'
import PagesListTitle from '../ListTitle'
import { PagesListTitleTooltip } from 'components/ui'

import { useToggle } from 'hooks/mouse/toggle'
import { favoritePagesSelector } from 'redux/selectors'
import tooltipHandler from 'helpers/pages/pagesItemTooltipTitleHandler'
import { ListWrapper } from '../PagesList.styles'

const FavoritePagesList: FC = memo(() => {
  const { isActive, toggleActive } = useToggle(true)
  const favoritePages = useSelector(favoritePagesSelector)

  const listTitleRef = useRef<HTMLDivElement>(null)
  const isListTitleHovering = useHover(listTitleRef)

  const tooltipTitle = useMemo(() => {
    return tooltipHandler(isActive)
  }, [isActive])

  return (
    <ListWrapper isOpen={isActive}>
      <PagesListTitle
        title='Favorites'
        reference={listTitleRef}
        onToggleList={toggleActive}
      />
      {isListTitleHovering && (
        <PagesListTitleTooltip
          title={tooltipTitle}
          description='Pages you have favorite.'
        />
      )}
      {isActive && (
        <PagesList
          paddingLeft={10}
          pages={favoritePages ? favoritePages : []}
        />
      )}
    </ListWrapper>
  )
})

export default FavoritePagesList
