import { CommentsFilters } from 'redux/sidebarsSlice/types'

export const options = [
  { title: CommentsFilters.OPEN, description: 'Open comments' },
  { title: CommentsFilters.RESOLVED, description: 'Resolved comments' },
]
