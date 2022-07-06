import React from 'react'

const ChevronDownSvg: React.FC = () => (
  <svg
    viewBox='0 0 30 30'
    style={{
      width: 10,
      height: '100%',
      display: 'block',
      fill: 'rgba(55, 53, 47, 0.35)',
      flexShrink: 0,
      backfaceVisibility: 'hidden',
      marginLeft: 4,
    }}
  >
    <polygon points='15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 ' />
  </svg>
)

export default ChevronDownSvg
