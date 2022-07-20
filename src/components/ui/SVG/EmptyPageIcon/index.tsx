import React, { FC } from 'react'
import Props from './EmptyPageIconSVG.types'

const EmptyPageIconSvg: FC<Props> = ({ width, height, transparency }) => (
  <svg
    viewBox='0 0 30 30'
    style={{
      width: width ? width : 20,
      height: height ? width : 20,
      display: 'block',
      fill: `rgba(55, 53, 47, ${transparency ? transparency : 0.35})`,
      flexShrink: 0,
      backfaceVisibility: 'hidden',
    }}
  >
    <g>
      <path d='M16,1H4v28h22V11L16,1z M23.172,11H16V3.828L23.172,11z M24,27H6V3h8v10h10V27z' />
    </g>
  </svg>
)

export default EmptyPageIconSvg
