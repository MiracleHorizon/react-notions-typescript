enum PageTemplates {
  BOARD = 'Board',
  TASK_LIST = 'TaskList',
  CALENDAR = 'Calendar',
  TABLE = 'Table',
}

interface AppModalsState {
  isPageSettingsPopupOpen: boolean
  template: PageTemplates
}

export { PageTemplates }
export type { AppModalsState }
