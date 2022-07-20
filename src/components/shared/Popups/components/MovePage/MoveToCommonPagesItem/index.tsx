import React, { FC, memo, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import EmptyUserAvatar from 'components/shared/EmptyUserAvatar'

import { useAppDispatch } from 'redux/store'
import { ActiveItemParams } from 'types'
import { INotionPage } from 'redux/types'
import { updatePage } from 'api/reduxAsyncThunks'
import {
  movePagePopupSelector,
  pagesSelector,
  userSelector,
} from 'redux/selectors'
import { closeMovePagePopup } from 'redux/actions'
import selectedItemHandler from 'helpers/selectedItemHandler'
import objectCopier from 'helpers/objectCopier'
import {
  CommonPagesItem,
  Title,
  MoveToTitle,
  AvatarContainer,
  Avatar,
} from './MoveToCommonPagesItem.styles'

const MoveToCommonPagesItem: FC<ActiveItemParams> = memo(props => {
  const { activeItem, onSelectActiveItem } = props
  const { entity } = objectCopier(useSelector(movePagePopupSelector))
  const pages = objectCopier(useSelector(pagesSelector))
  const user = useSelector(userSelector)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const item = useMemo(() => {
    return { title: 'Move to Common recentPages', id: '0' }
  }, [])
  const isActive = useMemo(
    () => selectedItemHandler({ activeItem, item }),
    [activeItem, item]
  )

  const onMovePageToCommonPages = useCallback((): void => {
    pages.forEach((page: INotionPage) => {
      if (page._id === entity.parentPageId) {
        page.dependencies = page.dependencies.filter((_id: string) => {
          return _id !== entity._id
        })
        //!
        // @ts-ignore
        appDispatch(updatePage(page))
      }
    })

    entity.parentPageId = null
    entity.pageSettings.isExpanded = false

    appDispatch(updatePage(entity))
    dispatch(closeMovePagePopup())
  }, [appDispatch, dispatch, entity])

  return (
    <CommonPagesItem
      isActive={isActive}
      onClick={onMovePageToCommonPages}
      onMouseEnter={() => onSelectActiveItem(item)}
    >
      {user?.avatarUrl ? (
        <AvatarContainer>
          <Avatar src={user.avatarUrl} />
        </AvatarContainer>
      ) : (
        <EmptyUserAvatar />
      )}
      <MoveToTitle>
        Move to <Title>Common pages</Title>
      </MoveToTitle>
    </CommonPagesItem>
  )
})

export default MoveToCommonPagesItem
