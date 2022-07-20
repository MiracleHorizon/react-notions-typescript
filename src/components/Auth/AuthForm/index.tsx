import React, { FC, memo } from 'react'
import { useForm } from 'react-hook-form'

import { useInput } from 'hooks/keyboard/input'
import SharedAuthentication from './SharedAuthentication'
import { OutlineInput, RedOutlineButton, Separator } from 'components/ui'
import { Wrapper, Form, InputContainer, LabelTitle } from './LoginForm.styles'
import { AuthSubmitParams } from '../../../layouts/Unauthorized'

const AuthForm: FC<{ onSubmit: (values: AuthSubmitParams) => void }> = memo(
  ({ onSubmit }) => {
    const {
      inputValue: emailValue,
      onChangeInputValue: onChangeEmailInput,
      onClearInput: onClearEmailInput,
    } = useInput('')

    const {
      inputValue: passwordValue,
      onChangeInputValue: onChangePasswordInput,
      onClearInput: onClearPasswordInput,
    } = useInput('')

    const { register, handleSubmit } = useForm({
      defaultValues: { email: '', password: '' },
      mode: 'onChange',
    })

    return (
      <Wrapper>
        <SharedAuthentication />
        <Separator color='rgba(55, 53, 47, 0.16)' />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <LabelTitle>Email</LabelTitle>
            <input
              type='email'
              // value={emailValue}
              {...register('email', { required: 'Укажите почту.' })}
            />
            {/*<OutlineInput*/}
            {/*  placeholder='Enter your email address...'*/}
            {/*  type='email'*/}
            {/*  inputValue={emailValue}*/}
            {/*  // onChange={onChangeEmailInput}*/}
            {/*  onClear={onClearEmailInput}*/}
            {/*  {...register('email', { required: 'Укажите почту.' })}*/}
            {/*/>*/}
          </InputContainer>
          <InputContainer>
            <LabelTitle>Password</LabelTitle>
            <input
              // type='password'
              type='text'
              {...register('password', { required: 'Укажите пароль' })}
            />
            {/*<OutlineInput*/}
            {/*  placeholder='Enter your password...'*/}
            {/*  type='password'*/}
            {/*  inputValue={passwordValue}*/}
            {/*  // onChange={onChangePasswordInput}*/}
            {/*  onClear={onClearPasswordInput}*/}
            {/*  {...register('password', { required: 'Укажите пароль.' })}*/}
            {/*/>*/}
          </InputContainer>
          <button type={'submit'}>Submit</button>
        </Form>
        {/*<RedOutlineButton*/}
        {/*  title='Click to continue'*/}
        {/*  action={handleSubmit(onSubmit)}*/}
        {/*/>*/}
      </Wrapper>
    )
  }
)

export default AuthForm
