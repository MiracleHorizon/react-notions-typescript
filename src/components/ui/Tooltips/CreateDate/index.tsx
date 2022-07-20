import React, { FC, memo } from 'react'

import Props from './CreateDateTooltip.types'
import { CalendarSvg } from 'components/ui/SVG'
import {
  Container,
  TitleContainer,
  DateTitle,
  TimeTitle,
} from './CreateDateTooltip.styles'

const CreateDateTooltip: FC<Props> = memo(({ date, time }) => (
  <Container>
    <CalendarSvg />
    <TitleContainer>
      <DateTitle>{date}</DateTitle>
      at
      <TimeTitle>{time} PM</TimeTitle>
    </TitleContainer>
  </Container>
))

export default CreateDateTooltip
