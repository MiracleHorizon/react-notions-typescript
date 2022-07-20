import React, {
  FC,
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useSelector } from 'react-redux'

import CommentsList from './CommentsList'
import SendCommentOptions from './SendCommentOptions'
import EmptyUserAvatar from 'components/shared/EmptyUserAvatar'
import { CommentsInput, ResolvedCommentsButton } from 'components/ui'

import { useInput } from 'hooks/keyboard/input'
import { useAppDispatch } from 'redux/store'
import { updatePage } from 'api/reduxAsyncThunks'
import {
  currentPageCopySelector,
  currentPageSelector,
  userSelector,
} from 'redux/selectors'
import {
  Wrapper,
  AvatarContainer,
  Avatar,
  StyledForm,
  BottomShadow,
} from './PageCommentsPanel.styles'

const PageCommentsPanel: FC = memo(() => {
  const {
    commentsInfo: { isHasComments, comments },
  } = useSelector(currentPageSelector)
  const currentPageCopy = useSelector(currentPageCopySelector)
  const user = useSelector(userSelector)

  const { inputValue, onClearInput, onChangeInputValue } = useInput('')
  const [isInputFocused, setInputFocus] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const appDispatch = useAppDispatch()

  const onSubmitForm = useCallback(
    (e: FormEvent): void => {
      e.preventDefault()

      if (inputValue !== '') {
        currentPageCopy.commentsInfo.comments = [
          ...currentPageCopy.commentsInfo.comments,
          { title: inputValue, createdAt: new Date(Date.now()) },
        ]

        appDispatch(updatePage(currentPageCopy))
        onClearInput()
      }
    },
    [appDispatch, currentPageCopy, inputValue, onClearInput]
  )

  const onAttachCommentFile = useCallback((): void => {}, [])

  useEffect(() => {
    if (!isHasComments) inputRef.current?.focus()
  }, [isHasComments])

  return (
    <Wrapper>
      {isHasComments && <CommentsList comments={comments} />}
      <StyledForm isInputFocused={isInputFocused} onSubmit={onSubmitForm}>
        {user && user.avatarUrl ? (
          <AvatarContainer>
            <Avatar src={user.avatarUrl} />
          </AvatarContainer>
        ) : (
          <EmptyUserAvatar />
        )}
        <CommentsInput
          inputRef={inputRef}
          inputValue={inputValue}
          setInputFocus={setInputFocus}
          onChange={onChangeInputValue}
        />
        {isInputFocused && (
          <SendCommentOptions
            inputValue={inputValue}
            onSubmit={onSubmitForm}
            onAttach={onAttachCommentFile}
          />
        )}
      </StyledForm>
      <BottomShadow />
      {/*{resolvedComments.length > 0 && (*/}
      {/*  <ResolvedCommentsButton*/}
      {/*    resolvedCommentsCount={resolvedComments.length}*/}
      {/*  />*/}
      {/*)}*/}
    </Wrapper>
  )
})

export default PageCommentsPanel
//cursor: ${props => !props.isInputFocused && 'pointer'};

// :hover {
//   ${props => !props.isInputFocused && 'background: rgba(55, 53, 47, 0.06);}'}
// }
