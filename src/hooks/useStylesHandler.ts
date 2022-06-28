import { useCallback } from 'react'

interface UseStylesHandlerParams {
  isTrue: boolean
  basicClassName: string
  isTrueClassName: string | null
  isFalseClassName: string | null
}

export const useStylesHandler = (params: UseStylesHandlerParams): string => {
  const { basicClassName, isTrue, isTrueClassName, isFalseClassName } = params

  const className = useCallback(() => {
    const trulyStyles = !isTrueClassName ? '' : isFalseClassName
    const falsyStyles = !isFalseClassName ? '' : isFalseClassName

    return isTrue ? trulyStyles : falsyStyles
  }, [isTrueClassName, isFalseClassName, isTrue])

  return basicClassName + ' ' + className()
}
