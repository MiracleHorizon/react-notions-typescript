import React, { FC } from 'react'

interface Props {
  color?: string
}

const CheckboxSquareSvg: FC<Props> = ({ color }) => (
  <svg
    viewBox='0 0 16 16'
    style={{
      width: '100%',
      height: '100%',
      display: 'block',
      fill: color ? color : 'inherit',
      flexShrink: 0,
      backfaceVisibility: 'hidden',
    }}
  >
    <path d='M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z' />
  </svg>
)

export default CheckboxSquareSvg
