import _ from 'lodash'
import { CoversList, ImgCover } from 'redux/pageDecorationSlice/types'

export const getRandomCover = (coversLists: CoversList[]): string => {
  const covers: ImgCover[] = []

  coversLists.forEach(coversList => covers.push(...coversList.content))

  const randomCover = _.sample(covers)

  return randomCover ? randomCover.coverImg : ''
}

export const getRandomIcon = (emojisLists: []): string => {
  return ''
}
