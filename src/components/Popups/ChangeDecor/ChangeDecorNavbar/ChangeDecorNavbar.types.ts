export enum DecorPurposes {
  COVER = 'Cover',
  ICON = 'Icon',
}

export default interface SwitchDecorPopupNavbarProps {
  categories: string[]
  purpose: DecorPurposes
}
