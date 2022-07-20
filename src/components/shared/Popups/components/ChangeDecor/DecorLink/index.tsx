import React, { FC, FormEvent, memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/store'

import { OutlineInput, FilledButton } from 'components/ui'

import { useInput } from 'hooks/keyboard/input'
import { updatePage } from 'api/reduxAsyncThunks'
import {
  closeChangeCoverPopup,
  closeChangeIconPopup,
  refreshCoverCategory,
  refreshIconCategory,
} from 'redux/actions'
import {
  changeCoverPopupSelector,
  changeIconPopupSelector,
} from 'redux/selectors'
import objectCopier from 'helpers/objectCopier'
import { Wrapper, StyledForm } from './DecorLink.styles'

const DecorationLink: FC<{ purpose: string }> = memo(({ purpose }) => {
  const { inputValue, onChangeInputValue, onClearInput } = useInput('')
  const coverPageCopy = objectCopier(useSelector(changeCoverPopupSelector).page)
  const iconPageCopy = objectCopier(useSelector(changeIconPopupSelector).page)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const onSubmitLinkForm = useCallback(
    (e: FormEvent): void => {
      e.preventDefault()

      switch (purpose) {
        case 'Cover':
          coverPageCopy.coverInfo.isHasCover = true
          coverPageCopy.coverInfo.coverUrl = inputValue

          appDispatch(updatePage(coverPageCopy))
          dispatch(closeChangeCoverPopup())
          dispatch(refreshCoverCategory())
          break
        case 'Icon':
          iconPageCopy.iconInfo.isHasIcon = true
          iconPageCopy.iconInfo.iconUrl = inputValue

          appDispatch(updatePage(iconPageCopy))
          dispatch(closeChangeIconPopup())
          dispatch(refreshIconCategory())
          break
      }
    },
    [appDispatch, dispatch, coverPageCopy, iconPageCopy, inputValue, purpose]
  )

  return (
    <Wrapper>
      <StyledForm>
        <OutlineInput
          placeholder='Paste an image link...'
          inputValue={inputValue}
          onChange={onChangeInputValue}
          onClear={onClearInput}
        />
        <FilledButton title='Submit' onClickAction={onSubmitLinkForm} />
      </StyledForm>
      <p>Works with any image from the web.</p>
    </Wrapper>
  )
})

export default DecorationLink
