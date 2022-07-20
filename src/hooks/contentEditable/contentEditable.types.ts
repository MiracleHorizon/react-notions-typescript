import { ContentEditableEvent } from 'react-contenteditable'

export interface UseContentEditableParams {
  itemId: string
  itemContent: string
}

// KeyboardEvent
export interface UseContentEditableResult {
  textValue: string
  handleChange: (e: ContentEditableEvent) => void
  handleKeydown: (e: any) => void
  handleBlur: () => void
}
