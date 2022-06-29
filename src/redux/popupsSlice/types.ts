enum PageTemplates {
  BOARD = 'Board',
  TASK_LIST = 'TaskList',
  CALENDAR = 'Calendar',
  TABLE = 'Table',
}

interface IAppPopupsState {
  isPageSettingsPopupOpen: boolean
  template: PageTemplates
}

export type { IAppPopupsState }
export { PageTemplates }
