import * as React from 'react'

const RenameSVG: React.FC = (props: any) => (
  <svg
    viewBox='0 0 16 16'
    style={{
      width: 16,
      height: 16,
      display: 'block',
      fill: 'rgba(55, 53, 47, 0.85)',
      flexShrink: 0,
      backfaceVisibility: 'hidden',
    }}
    {...props}
  >
    <path d='M14.7881 2.5752L15.3008 2.04199C15.5605 1.76855 15.5742 1.39941 15.3213 1.13965L15.1436 0.955078C14.9111 0.722656 14.5283 0.763672 14.2754 1.00977L13.749 1.5293L14.7881 2.5752ZM6.68066 9.87598L8.0752 9.28809L14.2891 3.06738L13.25 2.03516L7.03613 8.25586L6.4209 9.60254C6.35254 9.75977 6.52344 9.9375 6.68066 9.87598ZM4.09668 14.4355H12.0674C13.373 14.4355 14.1387 13.6768 14.1387 12.2207V4.99512L12.7988 6.33496V12.1045C12.7988 12.7676 12.4434 13.1025 11.9854 13.1025H4.17871C3.54297 13.1025 3.19434 12.7676 3.19434 12.1045V4.49609C3.19434 3.83301 3.54297 3.49805 4.17871 3.49805H10.0234L11.3633 2.1582H4.09668C2.62695 2.1582 1.85449 2.91699 1.85449 4.37988V12.2207C1.85449 13.6836 2.62695 14.4355 4.09668 14.4355Z' />
  </svg>
)

export default RenameSVG
