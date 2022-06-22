import React, { useState } from 'react'

import Banner from '../../../shared/Banner'

const Board: React.FC = () => {
  const [isHasBanner, setBanner] = useState(true)

  return <div>{isHasBanner && <Banner />}</div>
}

export default Board
