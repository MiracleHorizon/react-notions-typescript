import React from 'react'

import { useInput } from 'hooks/useInput'
import { ChangeEmojiListsProps as Props } from '../ChangeDecorLists.types'
import OutlineInput from 'shared/Inputs/OutlineInput'
import { ListContainer, ListsWrapper } from '../ChangeDecorLists.styles'
import {
  EmojiList,
  EmojiItem,
  ListTitle,
  InputContainer,
} from './ChangeEmojiLists.styles'

const ChangeEmojiLists: React.FC<Props> = ({ decorations }) => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')

  return (
    <>
      <InputContainer>
        <OutlineInput
          placeholder='Filter...'
          inputValue={inputValue}
          onChange={onChangeInputValue}
          onClear={onClearInput}
        />
      </InputContainer>
      <ListsWrapper>
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
}

export default ChangeEmojiLists
