import {
  HeadingParams,
  THeadingLevel,
} from 'components/Workspace/ContentItems/Board/Heading/Heading.types'
import { ContentDatasets } from 'models/content/content.types'

class HeadingParamsConstructor implements HeadingParams {
  parentHeight
  height
  marginTop
  fontSize

  constructor(params: HeadingParams) {
    this.parentHeight = params.parentHeight
    this.height = params.height
    this.marginTop = params.marginTop
    this.fontSize = params.fontSize
  }
}

const heading1Params = new HeadingParamsConstructor({
  parentHeight: '45px',
  height: '40px',
  marginTop: '10px',
  fontSize: '30px',
})
const heading2Params = new HeadingParamsConstructor({
  parentHeight: '37px',
  height: '32px',
  marginTop: '8px',
  fontSize: '24px',
})
const heading3Params = new HeadingParamsConstructor({
  parentHeight: '32px',
  height: '27px',
  marginTop: '5px',
  fontSize: '20px',
})

export class HeadingItemHandler {
  private optionsPanelOffsets = {
    heading1: 10,
    heading2: 6,
    heading3: 4,
  }

  constructor(public headingLevel: THeadingLevel) {}

  getParams(): HeadingParams {
    switch (this.headingLevel) {
      case '1':
        return heading1Params
      case '2':
        return heading2Params
      case '3':
        return heading3Params
      default:
        return heading1Params
    }
  }

  getOffset(): number {
    switch (this.headingLevel) {
      case '1':
        return this.optionsPanelOffsets.heading1
      case '2':
        return this.optionsPanelOffsets.heading2
      case '3':
        return this.optionsPanelOffsets.heading3
      default:
        return this.optionsPanelOffsets.heading1
    }
  }

  getDataset(): ContentDatasets {
    switch (this.headingLevel) {
      case '1':
        return ContentDatasets.HEADING_1
      case '2':
        return ContentDatasets.HEADING_2
      case '3':
        return ContentDatasets.HEADING_3
      default:
        return ContentDatasets.HEADING_1
    }
  }

  getPlaceholder(): string {
    switch (this.headingLevel) {
      case '1':
        return 'Heading 1'
      case '2':
        return 'Heading 2'
      case '3':
        return 'Heading 3'
      default:
        return 'Heading 1'
    }
  }
}
