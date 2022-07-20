import { FormEvent } from 'react'

type VoidAction = () => void
type SubmitAction = (e: FormEvent) => void

export default interface SendButtonProps {
  isActive: boolean
  action: VoidAction | SubmitAction
}
