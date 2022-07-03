import React from 'react'

const EmptyPageSVG: React.FC = () => (
  <svg
    viewBox='0 0 30 30'
    className='pageEmpty'
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
      <path d='M16,1H4v28h22V11L16,1z M23.172,11H16V3.828L23.172,11z M24,27H6V3h8v10h10V27z' />
    </g>
  </svg>
)

export default EmptyPageSVG
