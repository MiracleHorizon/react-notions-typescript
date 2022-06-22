import React, { ChangeEvent, useState } from 'react'

import Authentication from './Authentication'
import ClearInput from '../../shared/Buttons/ClearInput'

import styles from './LoginForm.module.scss'

const LoginForm: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>('')

  const emailValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value)
  }

  const onClearEmailInput = (): void => setEmailValue('')

  return (
    <div className={styles.root}>
      <Authentication />
      <div className={styles.separator} />
      <form>
        <label>
          Email
          <input
            type='text'
            placeholder='Enter your email address...'
            value={emailValue}
            onChange={emailValueHandler}
          />
          {emailValue !== '' && <ClearInput action={onClearEmailInput} />}
        </label>
        <div>
          <span>Continue with email</span>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
