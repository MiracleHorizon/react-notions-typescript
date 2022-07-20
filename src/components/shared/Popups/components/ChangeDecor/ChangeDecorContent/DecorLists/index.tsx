import React, { FC, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'

import Props from './ChangeDecorLists.types'
import ChangeEmojiLists from './ChangeEmojiList'
import ChangeCoverGallery from './ChangeCoverGallery'
import { coversListsSelector } from 'redux/selectors'
import { Wrapper } from './ChangeDecorLists.styles'

const ChangeDecorLists: FC<Props> = memo(({ listTitle }) => {
  const emoji = useMemo(() => {
    return [
      {
        title: 'People',
        content: [
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
          '🤔',
        ],
      },
      {
        title: 'Animals',
        content: [
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
          '🐼',
        ],
      },
    ]
  }, [])

  const coverLists = useSelector(coversListsSelector)

  return (
    <Wrapper>
      {listTitle === 'Emoji' ? (
        <ChangeEmojiLists decorations={emoji} />
      ) : (
        <ChangeCoverGallery decorations={coverLists} />
      )}
    </Wrapper>
  )
})

export default ChangeDecorLists
