import { RefObject } from 'react'

export interface PagesListTitleProps {
  title: string
  reference: RefObject<HTMLDivElement>
  toggleList: () => void
}
