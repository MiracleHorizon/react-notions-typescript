import { FC } from 'react'

interface OptionsItemProps {
  title: string
  IconSvg: FC
  action: () => void
}

interface OptionsPanelProps {
  options: OptionsItemProps[] | OptionsItemProps
}

export type { OptionsItemProps, OptionsPanelProps }
