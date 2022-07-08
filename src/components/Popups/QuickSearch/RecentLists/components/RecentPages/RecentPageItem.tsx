import React from 'react'
import { useDispatch } from 'react-redux'

import { EmptyPageIconSvg, EnterSvg } from 'shared/SVG'
import { setCurrentPage } from 'redux/workSpaceSlice/slice'
import { closeQuickSearchPopup } from 'redux/popupsSlice/slice'
import { IRecentPageItem } from '../../RecentLists.types'
import selectedItemHandler from 'helpers/selectedItemHandler'
import { Item, Icon, EnterBlock, Title } from '../../RecentListItem.styles'

const RecentPageItem: React.FC<IRecentPageItem> = props => {
  const { id, title, iconInfo, activeItem, onSelectActiveItem } = props
  const isActive = selectedItemHandler({ activeItem, item: { id, title } })
  const dispatch = useDispatch()

  // onSelectItem -> onSelectActiveItem
  const onSelectItem = (): void => {
    onSelectActiveItem({ id, title })
  }
  const onSelectPage = (): void => {
    dispatch(setCurrentPage(id))
    dispatch(closeQuickSearchPopup())
  }

  return (
    <Item
      isActive={isActive}
      onClick={onSelectPage}
      onMouseEnter={onSelectItem}
    >
      {iconInfo.isHasIcon ? (
        <Icon src={iconInfo.icon!} alt='Page img' />
      ) : (
        <EmptyPageIconSvg />
      )}
      <Title purpose='Page'>{title}</Title>
      {isActive && (
        <EnterBlock>
          <EnterSvg />
        </EnterBlock>
      )}
    </Item>
  )
}

export default RecentPageItem
