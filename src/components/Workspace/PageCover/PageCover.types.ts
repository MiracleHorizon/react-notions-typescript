interface CoverWrapperProps {
  isHasCover: boolean
  isRepositionEnabled: boolean
}

interface StyledCoverProps {
  cover: string
  coverType: string
  coverPosition: number
}

export default interface PageCoverProps {}
export type { CoverWrapperProps, StyledCoverProps }
