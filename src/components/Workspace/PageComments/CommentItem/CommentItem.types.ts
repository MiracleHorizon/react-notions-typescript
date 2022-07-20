import { IComment } from 'redux/types'

export default interface CommentItemProps extends IComment {
  index: number
}
