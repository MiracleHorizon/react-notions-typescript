import { FormEvent } from 'react'

type ClickAction = () => void
type SubmitAction = (e: FormEvent) => void
type AnyAction = (v: any) => void

export interface ColorInfo {
  colorInfo?: {
    backgroundColor: string
    color: string
    hoverColor: string
    activeColor: string
  }
}

export default interface FilledButtonProps extends ColorInfo {
  title: string
  onClickAction: ClickAction | SubmitAction | AnyAction
}
