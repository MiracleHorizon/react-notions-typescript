// import { useCallback } from 'react'
// import { useDispatch } from 'react-redux'
//
// import {
//   UseKeyboardBindParams as HookParams,
//   UseKeyboardBindResult as HookResult,
// } from './useKeyboardBind.types'
//
// export const useKeyboardBind = (params: HookParams): HookResult => {
//   const { keyboardCode, action, ctrlKey, shiftKey, altKey, metaKey } = params
//   const dispatch = useDispatch()
//
//   return useCallback(
//     (e: KeyboardEvent) => {
//       if (ctrlKey && e.ctrlKey ) {
//         if (keyboardCode === e.code) {
//           dispatch(action)
//         }
//       }
//     },
//     [action, ctrlKey, dispatch, keyboardCode]
//   )
// }
//
// // [keyboardKey, ctrlKey, shiftKey, altKey, metaKey]

export {}
