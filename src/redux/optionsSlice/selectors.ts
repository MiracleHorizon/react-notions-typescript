import { RootState } from '../store'

const favoritePageOptionsSelector = (state: RootState) =>
  state.options.favoritePageOptions
const privatePageOptionsSelector = (state: RootState) =>
  state.options.privatePagesOptions

export { favoritePageOptionsSelector, privatePageOptionsSelector }
