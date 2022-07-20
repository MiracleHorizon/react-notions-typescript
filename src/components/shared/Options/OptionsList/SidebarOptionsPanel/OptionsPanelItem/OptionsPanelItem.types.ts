import { FC } from 'react'

export default interface OptionsItemProps {
  title: string
  IconSvg: FC
  onClickAction: () => void
}
