import { RootState } from '../../store'
import { IWorkspacePage } from './types'

const workspacePagesSelector = (state: RootState): IWorkspacePage[] | [] => {
  return state.workspace.pages
}

const recentlyDeletedPagesSelector = (
  state: RootState
): IWorkspacePage[] | [] => {
  return state.workspace.recentlyDeleted
}

const workspaceLoadingStatusesSelector = (state: RootState) => {
  return state.workspace.loadingStatuses
}

export {
  workspacePagesSelector,
  recentlyDeletedPagesSelector,
  workspaceLoadingStatusesSelector,
}
