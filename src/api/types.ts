enum LoadingStatuses {
  PENDING = 'pending',
  IDLE = 'idle',
  REJECTED = 'rejected',
  SUCCEEDED = 'succeeded',
}

interface PageFilterParams {
  id: number
  title?: string
}

export { LoadingStatuses }
export type { PageFilterParams }
