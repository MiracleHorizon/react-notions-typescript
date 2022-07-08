import React from 'react'

import { Wrapper } from './ChangeDecorLists.styles'
import ChangeEmojiLists from './ChangeEmojiList'

interface Props {
  listTitle: 'Emoji' | 'Covers'
}

const decorations = [
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
const list2 = [
  ['🤔', '🤔', '🤔', '🤔'],
  ['🤔', '🤔', '🤔', '🤔'],
  ['🤔', '🤔', '🤔', '🤔'],
  ['🤔', '🤔', '🤔', '🤔'],
  ['🤔', '🤔', '🤔', '🤔'],
]

const ChangeDecorLists: React.FC<Props> = ({ listTitle }) => {
  return (
    <Wrapper>
      {listTitle === 'Emoji' ? (
        <ChangeEmojiLists decorations={decorations} />
      ) : (
        list2.map(item => <h3>{item}</h3>)
      )}
    </Wrapper>
  )
}

export default ChangeDecorLists
