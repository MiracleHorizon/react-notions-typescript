import { ChangeEvent } from 'react'

export default interface SearchFormProps {
  inputValue: string
  onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  onClearInput: () => void
}
