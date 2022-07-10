import React from 'react'

import Props from './ChangeDecorLists.types'
import ChangeEmojiLists from './ChangeEmojiList'
import ChangeCoverGallery from './ChangeCoverGallery'
import { Wrapper } from './ChangeDecorLists.styles'
import { useSelector } from 'react-redux'
import { coversListsSelector } from '../../../../../redux/pageDecorationSlice/selectors'

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
}

export default ChangeDecorLists
