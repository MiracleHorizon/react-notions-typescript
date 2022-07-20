import React, { FC, memo, useMemo } from 'react'

// import { ContentTypeImageSkeleton } from 'components/ui'

import Props from './ContentTypeTooltip.types'
import { TooltipHandler } from 'utils/contentItems/tooltip'
import * as Tooltip from './ContentTypeTooltip.styles'

const ContentTypeTooltip: FC<Props> = memo(({ contentType, ...coords }) => {
  const { title, imageUrl } = useMemo(() => {
    return new TooltipHandler(contentType).getParams()
  }, [contentType])

  return (
      <Tooltip.Wrapper coords={coords}>
        <Tooltip.Container>
          <Tooltip.ImageContainer>
            <Tooltip.Image src={imageUrl} />
            {/*<ContentTypeImageSkeleton/>*/}
          </Tooltip.ImageContainer>
          <Tooltip.TitleContainer>
            <Tooltip.Title>{title}</Tooltip.Title>
          </Tooltip.TitleContainer>
        </Tooltip.Container>
      </Tooltip.Wrapper>
  )
})

export default ContentTypeTooltip
