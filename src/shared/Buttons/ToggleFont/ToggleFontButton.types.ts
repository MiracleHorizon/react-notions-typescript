export default interface ToggleFontProps {
  title: string
  tooltipTitle: string
  activeFont: string
  fontFamily: string
  setActiveFont: (title: string) => void
}
