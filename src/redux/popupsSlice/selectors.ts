import { RootState } from '../store'

const pageSettingsPopupSelector = (state: RootState): boolean => {
  return state.popups.isPageSettingsPopupOpen
}
const pageTemplateSelector = (state: RootState): string => {
  return state.popups.template
}

export { pageSettingsPopupSelector, pageTemplateSelector }
