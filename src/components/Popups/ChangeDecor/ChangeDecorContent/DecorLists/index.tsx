import React from 'react'

import Props from './ChangeDecorLists.types'
import ChangeEmojiLists from './ChangeEmojiList'
import ChangeCoverGallery from './ChangeCoverGallery'
import { Wrapper } from './ChangeDecorLists.styles'

const emoji = [
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

const ChangeDecorLists: React.FC<Props> = ({ listTitle }) => {
  return (
    <Wrapper>
      {listTitle === 'Emoji' ? (
        <ChangeEmojiLists decorations={emoji} />
      ) : (
        <ChangeCoverGallery decorations={emoji} />
      )}
    </Wrapper>
  )
}

export default ChangeDecorLists
