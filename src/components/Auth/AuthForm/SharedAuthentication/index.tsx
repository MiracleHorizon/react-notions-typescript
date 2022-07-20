import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { GrayOutlineButton } from 'components/ui'
import { AppleLogoSvg, GoogleLogoSvg } from 'components/ui/SVG'
import {
  Wrapper,
  AppTitleContainer,
  AppImage,
  AppTitle,
  AuthDescription,
  AuthsContainer,
} from './SharedAuthentication.styles'
import notionAppSvg from 'assets/img/appImgs/notion.svg'

const SharedAuthentication: FC = () => {
  const params = useLocation()

  const AuthWithGoogle = (): void => {}
  const AuthWithApple = (): void => {}

  return (
    <Wrapper>
      <AppTitleContainer>
        <AppImage src={notionAppSvg} alt='Notions' />
        <AppTitle>Welcome to React Notion</AppTitle>
        <AuthDescription>
          {params.pathname === '/login'
            ? 'Log in to sync your content.'
            : 'Create an account to use the service.'}
        </AuthDescription>
      </AppTitleContainer>
      <AuthsContainer>
        <GrayOutlineButton
          title='Continue with Google'
          action={AuthWithGoogle}
          IconSvg={GoogleLogoSvg}
        />
        <GrayOutlineButton
          title='Continue with Apple'
          action={AuthWithApple}
          IconSvg={AppleLogoSvg}
        />
      </AuthsContainer>
    </Wrapper>
  )
}

export default SharedAuthentication
