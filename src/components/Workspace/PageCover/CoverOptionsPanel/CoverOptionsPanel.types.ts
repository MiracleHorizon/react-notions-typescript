import { Dispatch, SetStateAction } from 'react'

export default interface CoverOptionsPanelProps {
  isHovering: boolean
  isRepositioning: boolean
  setIsRepositioning: Dispatch<SetStateAction<boolean>>
}

interface StyledOptionProps {
  borderRight?: boolean
  position: 'left' | 'right'
}

export type { StyledOptionProps }
