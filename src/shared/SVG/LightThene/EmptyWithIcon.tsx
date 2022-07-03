import React from 'react'

const EmptyWidthIconSVG: React.FC = () => (
  <svg
    viewBox='0 0 30 30'
    style={{
      width: 20,
      height: '100%',
      display: 'block',
      fill: 'rgba(55, 53, 47, 0.35)',
      flexShrink: 0,
      backfaceVisibility: 'hidden',
      marginRight: 10,
    }}
  >
    <g>
      <path d='M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z' />
    </g>
  </svg>
)

export default EmptyWidthIconSVG
