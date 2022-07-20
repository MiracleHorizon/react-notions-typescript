import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react'

export default interface CommentInputProps {
  inputValue: string
  inputRef: RefObject<HTMLInputElement>
  setInputFocus?: Dispatch<SetStateAction<boolean>>
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
