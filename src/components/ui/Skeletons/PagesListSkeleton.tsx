import React, { FC, memo } from 'react'
import ContentLoader from 'react-content-loader'

const PagesListSkeleton: FC<{ sidebarWidth: number }> = memo(
  ({ sidebarWidth }) => (
    <ContentLoader
      speed={2.3}
      width={sidebarWidth >= 200 ? sidebarWidth - 10 : 192}
      height={80}
      viewBox={`0 0 ${sidebarWidth >= 200 ? sidebarWidth - 10 : 192} 80`}
      backgroundColor='rgba(55, 53, 47, 0.08)'
      foregroundColor='rgba(55, 53, 47, 0.16)'
      // {...props}
    >
      <rect x='0' y='1' rx='4' ry='4' width='21' height='21' />
      <rect x='23' y='1' rx='4' ry='4' width='21' height='21' />
      <rect x='46' y='1' rx='4' ry='4' width={sidebarWidth - 20} height='21' />
      <rect x='0' y='24' rx='4' ry='4' width='21' height='21' />
      <rect x='23' y='24' rx='4' ry='4' width='21' height='21' />
      <rect x='46' y='24' rx='4' ry='4' width={sidebarWidth - 20} height='21' />
      <rect x='0' y='47' rx='4' ry='4' width='21' height='21' />
      <rect x='23' y='47' rx='4' ry='4' width='21' height='21' />
      <rect x='46' y='47' rx='4' ry='4' width={sidebarWidth - 20} height='21' />
    </ContentLoader>
  )
)

export default PagesListSkeleton
