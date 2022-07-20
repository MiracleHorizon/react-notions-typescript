import { RefObject } from 'react'

export default interface PagesListTitleProps {
  title: string
  reference: RefObject<HTMLDivElement>
  onToggleList: () => void
}
