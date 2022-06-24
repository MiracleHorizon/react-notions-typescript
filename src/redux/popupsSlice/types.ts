enum PageTemplates {
  BOARD = 'board',
  TASK_LIST = 'taskList',
  CALENDAR = 'calendar',
}

interface IAppPopupsState {
  isPageSettingsPopupOpen: boolean
  template: PageTemplates
}

export type { IAppPopupsState }
export { PageTemplates }
