import React, { FC, memo, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHover } from 'usehooks-ts'

import Props from './AuthorInfo.types'
import { BlackFilledTooltip, CreateDateTooltip } from 'components/ui'
import { tooltipsCoordsList } from 'components/ui/Tooltips/BlackFilledTooltip/BlackFilledTooltip.coords'
import EmptyUserAvatar from 'components/shared/EmptyUserAvatar'
import { userSelector } from 'redux/selectors'
import { Avatar, AvatarContainer } from '../PageCommentsPanel.styles'
import {
  Wrapper,
  UserNameContainer,
  UserName,
  DateInfoContainer,
  CreateDateInfo,
} from './AuthorInfo.styles'

const AuthorInfo: FC<Props> = memo(({ isEdited, date, time }) => {
  const user = useSelector(userSelector)

  const avatarRef = useRef<HTMLImageElement>(null)
  const isAvatarHovering = useHover(avatarRef)

  const dateTitleRef = useRef<HTMLDivElement>(null)
  const isDateTitleHovering = useHover(dateTitleRef)

  const authorTooltipCoords = useMemo(() => {
    return tooltipsCoordsList['workspace-comments-panel-author']
  }, [])

  return (
    <Wrapper>
      <AvatarContainer ref={avatarRef}>
        {user?.avatarUrl ? (
          <Avatar src={user.avatarUrl} ref={avatarRef} />
        ) : (
          <EmptyUserAvatar />
        )}
        {isAvatarHovering && (
          <BlackFilledTooltip
            title={user?.fullName}
            description={user?.email}
            coords={authorTooltipCoords}
          />
        )}
      </AvatarContainer>
      <UserNameContainer>
        <UserName>{user?.fullName}</UserName>
      </UserNameContainer>
      <DateInfoContainer ref={dateTitleRef}>
        <CreateDateInfo>{isEdited ? `${date} (edited)` : date}</CreateDateInfo>
        {isDateTitleHovering && <CreateDateTooltip date={date} time={time} />}
      </DateInfoContainer>
    </Wrapper>
  )
})

export default AuthorInfo
