import { RootState } from '../store'

const userBarOptionsSelector = (state: RootState) =>
  state.options.userBarOptions
const favoritePageOptionsSelector = (state: RootState) =>
  state.options.favoritePageOptions
const privatePageOptionsSelector = (state: RootState) =>
  state.options.privatePagesOptions

export {
  userBarOptionsSelector,
  favoritePageOptionsSelector,
  privatePageOptionsSelector,
}
