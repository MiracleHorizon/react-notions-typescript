import { ContentTypes } from 'models/content/content.types'

export type TParent = string | null

interface CreateItemParams {
  parent: TParent
  contentType: ContentTypes
  isExpanded?: boolean
  isComplete?: boolean
  dependencies?: []
}

export class ItemConstructor {
  create(params: CreateItemParams) {
    return {
      parent: params.parent,
      contentType: params.contentType,
      isCompleted: params.isComplete,
      isExpanded: params.isExpanded,
      dependencies: params.dependencies,
    }
  }
}

export const defaultItem = new ItemConstructor().create({
  parent: null,
  contentType: ContentTypes.TEXT,
  isComplete: false,
  isExpanded: false,
  dependencies: [],
})
