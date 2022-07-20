import React, { FC } from 'react'

interface Props {
  isOpen: boolean
  color?: string
}

const TriangleSvg: FC<Props> = ({ isOpen, color }) => (
  <svg
    viewBox='0 0 100 100'
    style={{
      width: '0.6em',
      height: '0.6em',
      display: 'block',
      fill: color
        ? color === 'Default'
          ? 'rgb(55, 53, 47)'
          : color
        : 'rgba(55, 53, 47, 0.45)',
      flexShrink: 0,
      backfaceVisibility: 'hidden',
      transition: 'transform 200ms ease-out 0s',
      transform: `rotateZ(${isOpen ? 180 : 90}deg)`,
      opacity: 1,
    }}
  >
    <polygon points='5.9,88.2 50,11.8 94.1,88.2 ' />
  </svg>
)

export default TriangleSvg
