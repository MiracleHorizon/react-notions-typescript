import React from 'react'
import OptionsList from '../../../components/OptionsList'
import MoveToOptionItem from '../../../components/OptionsList/OptionItem/MoveToOptionItem'
import PageChanges from '../../../components/PageChanges'
import { IOptionItem } from '../../../redux/optionsSlice/types'
import styles from './SidebarListOptions.module.scss'

interface SidebarListOptionsProps {
  options: IOptionItem[]
}

const SidebarListOptions: React.FC<SidebarListOptionsProps> = ({ options }) => (
  <div className={styles.list}>
    <OptionsList options={options} />
    <MoveToOptionItem />
    <PageChanges />
  </div>
)

export default SidebarListOptions
