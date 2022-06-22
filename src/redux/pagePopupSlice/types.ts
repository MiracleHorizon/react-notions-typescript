enum Templates {
  BOARD = 'board',
  TASK_LIST = 'taskList',
  TABLE = 'table',
}

interface IPageSettingsPopupState {
  isPopupOpen: boolean
  template: Templates
}

export type { IPageSettingsPopupState }
export { Templates }
