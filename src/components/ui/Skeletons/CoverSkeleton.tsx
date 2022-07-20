import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

const CoverSkeleton: FC = () => (
  <ContentLoader
    speed={2}
    width={122}
    height={65}
    viewBox='0 0 122 65'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='0' rx='3' ry='3' width='121' height='64' />
  </ContentLoader>
)

export default CoverSkeleton
