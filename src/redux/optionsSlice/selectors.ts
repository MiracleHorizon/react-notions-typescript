import { RootState } from '../store'

const favPageOptionsSelector = (state: RootState) =>
  state.options.favoritePageOptions
const commonPageOptionsSelector = (state: RootState) =>
  state.options.privatePagesOptions

export { favPageOptionsSelector, commonPageOptionsSelector }
