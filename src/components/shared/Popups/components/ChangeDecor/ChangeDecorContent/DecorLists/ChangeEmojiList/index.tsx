import React, { FC, memo } from 'react'

import { useInput } from 'hooks/keyboard/input'
import { ChangeEmojiListsProps } from '../ChangeDecorLists.types'
import { OutlineInput } from 'components/ui'
import { ListContainer, ListsWrapper } from '../ChangeDecorLists.styles'
import {
  EmojiList,
  EmojiItem,
  ListTitle,
  InputContainer,
} from './ChangeEmojiLists.styles'

const ChangeEmojiLists: FC<ChangeEmojiListsProps> = memo(({ decorations }) => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')

  return (
    <>
      <InputContainer>
        <OutlineInput
          renderFocusable
          placeholder='Filter...'
          inputValue={inputValue}
          onChange={onChangeInputValue}
          onClear={onClearInput}
        />
      </InputContainer>
      <ListsWrapper purpose='Emojis'>
        {decorations.map(({ title, content }) => (
          <ListContainer key={title}>
            <ListTitle>{title}</ListTitle>
            <EmojiList>
              {content.map((item, i) => (
                <EmojiItem key={i}>{item}</EmojiItem>
              ))}
            </EmojiList>
          </ListContainer>
        ))}
      </ListsWrapper>
    </>
  )
})

export default ChangeEmojiLists
