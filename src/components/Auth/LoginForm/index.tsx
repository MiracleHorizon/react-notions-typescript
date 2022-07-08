import React, { ChangeEvent, useState } from 'react'

import Authentication from './Authentication'
import ClearInputButton from 'shared/Buttons/ClearInput/ClearInputButton'

import styles from './LoginForm.module.scss'
import Separator from 'shared/Separator'

const LoginForm: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>('')

  const emailValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value)
  }

  const onClearEmailInput = (): void => setEmailValue('')

  return (
    <div className={styles.root}>
      <Authentication />
      <Separator />
      <form>
        <label>
          Email
          <input
            type='text'
            placeholder='Enter your email address...'
            value={emailValue}
            onChange={emailValueHandler}
          />
          {emailValue !== '' && (
            <ClearInputButton
              action={onClearEmailInput}
              coords={{ left: '' }}
            />
          )}
        </label>
        <div>
          <span>Continue with email</span>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
