export enum DecorPurposes {
  COVER = 'Cover',
  ICON = 'Icon',
} // Перенести в глобальные типы

export default interface SwitchDecorPopupNavbarProps {
  categories: string[]
  purpose: DecorPurposes
}
