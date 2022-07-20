import React from 'react'

const PencilSvg = (props: any) => (
  <svg
    viewBox='0 0 26 26'
    style={{
      display: 'block',
      fill: 'inherit',
      flexShrink: 0,
      backfaceVisibility: 'hidden',
    }}
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 0c-1.141 0-2.55.45-3.55 1.45L1 17.9 0 26l8.1-1L24.55 8.551C25.606 7.495 26 6.064 26 5a5 5 0 00-5-5zM6.9 20.5L20.5 6.9l1.436 1.436-13.6 13.6L6.9 20.5zm-2.836-2.836L5.5 19.1 19.1 5.5l-1.436-1.436-13.6 13.6zm-1.215 1.584l3.902 3.903-4.452.55.55-4.453zM19.09 2.689l4.221 4.221C23.802 6.295 24 5.523 24 5c0-1.654-1.346-3-3-3-.522 0-1.295.198-1.91.689z'
    />
  </svg>
)

export default PencilSvg
