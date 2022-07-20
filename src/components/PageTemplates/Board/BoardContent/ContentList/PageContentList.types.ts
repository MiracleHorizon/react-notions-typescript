import { RefObject } from 'react'

export default interface PageContentListProps {
  reference?: RefObject<HTMLDivElement>
  content: any[]
  pRight: string
}
