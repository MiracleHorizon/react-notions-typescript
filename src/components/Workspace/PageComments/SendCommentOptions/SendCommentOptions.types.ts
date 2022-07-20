import { FormEvent } from 'react'

export default interface SendCommentOptionsProps {
  inputValue: string
  onSubmit: (e: FormEvent) => void
  onAttach: () => void
}
