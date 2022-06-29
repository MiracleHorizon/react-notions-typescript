import React, { useRef } from 'react'
import OptionsList from '../../../components/OptionsList'
import MoveToOptionItem from '../../../components/OptionsList/OptionItem/MoveToOptionItem'
import PageChanges from '../../../components/PageChanges'
import { IOptionItem } from '../../../redux/optionsSlice/types'
import styles from './SidebarListOptions.module.scss'
import Modal from '../Modal'
import { useDispatch } from 'react-redux'
import { closeFavoritePagesOptionsModal } from '../../../redux/modalsSlice/slice'
import { useOnClickOutside } from 'usehooks-ts'

interface SidebarListOptionsProps {
  options: IOptionItem[]
}

const SidebarListOptions: React.FC<SidebarListOptionsProps> = ({ options }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const handleClickOutside = () => {
    dispatch(closeFavoritePagesOptionsModal())
  }

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <Modal>
      <div className={styles.list} ref={modalRef}>
        <OptionsList options={options} />
        <MoveToOptionItem />
        <PageChanges />
      </div>
    </Modal>
  )
}

export default SidebarListOptions
