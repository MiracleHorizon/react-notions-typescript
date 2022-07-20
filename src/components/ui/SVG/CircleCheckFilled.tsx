import React from 'react'

const CircleCheckFilledSvg: React.FC<{ isActive: boolean }> = ({
  isActive,
}) => (
  <svg
    viewBox='0 0 16 16'
    style={{
      width: 21,
      height: 21,
      display: 'block',
      fill: isActive ? 'rgb(46, 170, 220)' : 'rgba(55, 53, 47, 0.45)',
      flexShrink: 0,
      backfaceVisibility: 'hidden',
    }}
  >
    <path d='M8 16c4.377 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C3.624 0 0 3.624 0 8c0 4.369 3.631 8 8 8zm-.886-4.165c-.267 0-.487-.11-.69-.384l-1.97-2.416a.852.852 0 01-.187-.51c0-.352.274-.643.627-.643.228 0 .4.07.596.33l1.592 2.055 3.35-5.38c.148-.236.352-.362.556-.362.345 0 .667.236.667.604 0 .173-.102.353-.196.518l-3.686 5.804c-.165.259-.393.384-.66.384z' />
  </svg>
)

export default CircleCheckFilledSvg
