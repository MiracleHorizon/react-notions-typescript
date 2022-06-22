import React from 'react'

import styles from './Authentication.module.scss'
import notionAppSvg from '../../../assets/img/appImgs/notion.svg'
import googleLogoPng from '../../../assets/img/appImgs/google-logo.png'
import appleLogoPng from '../../../assets/img/appImgs/apple-logo.png'

const Authentication: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.titleBlock}>
        <img src={notionAppSvg} alt='' />
        <h2>Welcome to React Notion</h2>
        <p>Log in to sync your content.</p>
      </div>
      <div className={styles.authentication}>
        <div>
          <img src={googleLogoPng} alt='Google' />
          <p>Continue with Google</p>
        </div>
        <div>
          <img src={appleLogoPng} alt='Apple' />
          <p>Continue with Apple</p>
        </div>
      </div>
    </div>
  )
}

export default Authentication
