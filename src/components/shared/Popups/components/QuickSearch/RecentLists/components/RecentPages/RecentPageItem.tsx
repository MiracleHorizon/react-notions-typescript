import React, { FC, memo, useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { IRecentPageItem } from '../../RecentLists.types'
import { EmptyPageIconSvg, EnterSvg } from 'components/ui/SVG'
import { setCurrentPage, closeQuickSearchPopup } from 'redux/actions'
import selectedItemHandler from 'helpers/selectedItemHandler'
import { Item, Icon, EnterBlock, Title } from '../../RecentListItem.styles'

const RecentPageItem: FC<IRecentPageItem> = memo(props => {
  const { id, title, iconInfo, activeItem, onSelectActiveItem } = props
  const dispatch = useDispatch()

  const isActive = useMemo(() => {
    return selectedItemHandler({ activeItem, item: { id, title } })
  }, [activeItem, id, title])

  // onSelectItem -> onSelectActiveItem

  const onSelectItem = useCallback((): void => {
    onSelectActiveItem({ id, title })
  }, [id, title, onSelectActiveItem])

  const onSelectPage = useCallback((): void => {
    dispatch(setCurrentPage(id))
    dispatch(closeQuickSearchPopup())
  }, [dispatch, id])

  return (
    <Item
      isActive={isActive}
      onClick={onSelectPage}
      onMouseEnter={onSelectItem}
    >
      {iconInfo.isHasIcon ? (
        <Icon src={iconInfo.iconUrl} alt='Icon' />
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
})

export default RecentPageItem
