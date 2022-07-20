import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

const ContentTypeImageSkeleton: FC = () => (
  <ContentLoader
    speed={1}
    width={139}
    height={99}
    viewBox='0 0 139 99'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='3' ry='3' width='139' height='99' />
  </ContentLoader>
)

export default ContentTypeImageSkeleton
