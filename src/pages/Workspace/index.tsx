import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MoonLoader } from 'react-spinners'
import { useAppDispatch } from 'redux/store'
import SelectionArea from '@viselect/react'

import Workspace from 'components/Workspace'
import { LoadingStatuses } from 'api/types'
import { getAllPages } from 'api/reduxAsyncThunks'
// import { pagesLoadingStatusSelector } from 'redux/selectors'
import { pagesLoadingStatusSelector } from 'redux/selectors'
import 'styles/selection-area.scss'

const WorkspacePage: FC = () => {
  // const pagesLoadingStatus = useSelector(pagesLoadingStatusSelector)
  const pagesLoadingStatus = useSelector(pagesLoadingStatusSelector)
  const appDispatch = useAppDispatch()

  useEffect(() => {
    // appDispatch(getAllNotionsPages())
    appDispatch(getAllPages())
  }, [appDispatch])

  return pagesLoadingStatus === LoadingStatuses.SUCCEEDED ? (
    // <SelectionArea className='container' selectables='.selectable'>
    // </SelectionArea>
    <Workspace />
  ) : (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <MoonLoader size={50} speedMultiplier={0.7} />
    </div>
  )
}

export default WorkspacePage
