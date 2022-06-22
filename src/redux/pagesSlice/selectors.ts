import { RootState } from '../store'

const userBarItemsSelector = (state: RootState) => state.pages.userBarItems
// const privatePagesSelector = (state: RootState) => state.pages.privatePages
// const favoritePagesSelector = (state: RootState) => state.pages.favoritePages

export { userBarItemsSelector }
// export { privatePagesSelector, favoritePagesSelector, userBarItemsSelector }
