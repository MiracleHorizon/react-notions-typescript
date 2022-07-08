import { FormEvent } from 'react'

type OnClickAction = () => void
type OnSubmitAction = (e: FormEvent) => void

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
  onClickAction: OnClickAction | OnSubmitAction
}
