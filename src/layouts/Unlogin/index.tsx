import React from 'react'

import styles from './Unlogin.module.scss'
import LoginForm from '../../components/LoginForm'

const LoginLayout: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.mainTitle}>Не залогинен</h1>
      <LoginForm />
      <div className={styles.footer}>
        <a href=''>Need help?</a>
        <span className={styles.technologiesTitle}>Technologies</span>
        <p>© 2022 MiracleHorizon, Inc</p>
      </div>
    </div>
  )
}

export default LoginLayout
