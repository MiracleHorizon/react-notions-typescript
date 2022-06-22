import { RootState } from '../store'

const isPopupOpenSelector = (state: RootState): boolean => {
  return state.settingsPopup.isPopupOpen
}

const pageTemplateSelector = (state: RootState): string => {
  return state.settingsPopup.template
}

// const popupRefSelector = (state: RootState) => {
// return state.settingsPopup.ref
// }

export { isPopupOpenSelector, pageTemplateSelector }
