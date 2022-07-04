import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'
import { useToggle } from 'hooks/useToggle'
import { useTooltipTitle } from 'hooks/useTooltipTitle'

import PagesList from './PagesList'
import ListTitle from './ListTitle/ListTitle'
import Tooltip from 'shared/Tooltip/Tooltip'
import { favoritePagesSelector } from 'redux/workSpaceSlice/selectors'
import { favPageOptionsSelector } from 'redux/optionsSlice/selectors'
import { favPagesOptionsModalSelector } from 'redux/modalsSlice/selectors'
import PagesListOptionsModal from 'shared/ModalWindows/PagesListOptions'
import setCoordsByDOMRect from 'utils/helpers/setCoordsByDOMRect'
import { ElementPositions } from '../../../../../@types/types'
import { Wrapper } from './PagesList.styles'

const FavoritePagesList: React.FC = () => {
  const { isOpen, toggleIsOpen } = useToggle(true)
  const tooltipTitle = useTooltipTitle(isOpen)
  const favoritePages = useSelector(favoritePagesSelector)
  const [listTitle] = useState('Favorites')

  const listTitleRef = useRef<HTMLDivElement>(null)
  const isListTitleHovering = useHover(listTitleRef)

  const listRef = useRef<HTMLDivElement>(null)

  const isFavPageOptionsModalOpen = useSelector(favPagesOptionsModalSelector)
  const favoritePageOptions = useSelector(favPageOptionsSelector)

  const listCoords = setCoordsByDOMRect({
    requiredProperties: [ElementPositions.TOP, ElementPositions.RIGHT],
    element: listRef.current,
  })

  return (
    <Wrapper ref={listRef}>
      <ListTitle
        title={listTitle}
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
      {isFavPageOptionsModalOpen && (
        <PagesListOptionsModal
          listTitle={listTitle}
          options={favoritePageOptions}
          coords={listCoords}
        />
      )}
    </Wrapper>
  )
}

export default FavoritePagesList
