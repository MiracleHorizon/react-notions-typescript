import React, { FC } from 'react'

interface Props {
  width: number
  height: number
}

const OptionsDotsSvg: FC<Props> = ({ width, height }) => (
  <svg
    viewBox='0 0 13 3'
    style={{
      width: width,
      height: height,
      display: 'block',
      fill: 'rgba(55, 53, 47, 0.85)',
      flexShrink: 0,
      backfaceVisibility: 'hidden',
    }}
  >
    <g>
      <path d='M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z' />
      <path d='M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z' />
      <path d='M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z' />
    </g>
  </svg>
)

export default OptionsDotsSvg
