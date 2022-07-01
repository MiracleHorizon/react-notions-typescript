import { RefObject } from 'react'

interface PagesListTitleProps {
  title: string
  reference: RefObject<HTMLDivElement>
  toggleList: () => void
}

export type { PagesListTitleProps }
