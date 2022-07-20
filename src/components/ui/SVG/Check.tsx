import React from 'react'
import { SVGSizes } from './types'

interface Props extends SVGSizes {
  color?: string
}

const CheckSVG: React.FC<Props> = ({ width, height, color }) => (
  <svg
    viewBox='0 0 14 14'
    style={{
      width: width,
      height: height,
      display: 'block',
      fill: color ? color : 'inherit',
      flexShrink: 0,
      backfaceVisibility: 'hidden',
    }}
  >
    <polygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039' />
  </svg>
)

export default CheckSVG
