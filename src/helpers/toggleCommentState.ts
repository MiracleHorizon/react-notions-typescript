import { IComment } from 'redux/types'

interface Params {
  commentsList: IComment[]
  action: 'resolve' | 're-open'
}

const toggleOptionsHandler = (params: Params) => {
  const { commentsList, action } = params

  // if (action === 'resolve') {
  //    return commentsList.map(comment => comment.isResolved = true)
  // } else {
  //   return commentsList.map(comment => comment)
  // }

  commentsList.forEach(comment => (comment.isResolved = true))

  return commentsList
}

export default toggleOptionsHandler
