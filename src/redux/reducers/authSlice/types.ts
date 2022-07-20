import { LoadingStatuses } from 'api/types'
import { IUser } from 'models/user'

export default interface AuthState {
  user: IUser | null
  loadingStatus: LoadingStatuses
}
