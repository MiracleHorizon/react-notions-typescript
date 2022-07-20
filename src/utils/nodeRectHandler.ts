import { NodeRef } from 'types'

export const nodeRectHandler = (nodeRef: NodeRef<HTMLDivElement>) => {
  if (!nodeRef.current) return

  return nodeRef.current.getBoundingClientRect()
}
