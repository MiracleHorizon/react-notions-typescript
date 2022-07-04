import React from 'react'

const TriangleSVG: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    viewBox='0 0 100 100'
    style={{
      width: '0.6875em',
      height: '0.6875em',
      display: 'block',
      fill: 'rgba(55, 53, 47, 0.45)',
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

export default TriangleSVG
