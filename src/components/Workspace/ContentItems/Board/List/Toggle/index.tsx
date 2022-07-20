import React, { FC, memo, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

import ContentItem from '../../index'
import PageContentList from 'components/PageTemplates/Board/BoardContent/ContentList'
import { ToggleButton } from 'components/ui'

import { useToggle } from 'hooks/mouse/toggle'
import Props from './ToggleList.types'
import { ContentDatasets } from 'models/content/content.types'
import * as Item from './ToggleList.styles'

const ToggleListItem: FC<Props> = memo(
  ({ _id, content, itemIndex, isExpanded, dependencies, ...other }) => {
    const { textColor, background } = other
    const listTitleValue = useRef<string>(content)
    
    // isExpanded
    const { isActive, toggleActive } = useToggle(false)

    return (
      <Item.Wrapper>
        <ContentItem
          dataContent={ContentDatasets.TOGGLE_LIST}
          optionsPanelTopOffset='3'
          itemIndex={itemIndex}
        >
          <Item.Container textColor={textColor} background={background}>
            <Item.HeadingContainer>
              <Item.ButtonContainer>
                <ToggleButton
                  isExpanded={isActive}
                  toggleExpanded={toggleActive}
                  svgColor={textColor}
                />
              </Item.ButtonContainer>
              <ContentEditable
                placeholder='Toggle'
                data-content='toggle-list-title'
                html={listTitleValue.current}
                onChange={() => {}}
              />
            </Item.HeadingContainer>
          </Item.Container>
        </ContentItem>
        {isActive && (
          <Item.Content background={background}>
            <PageContentList pRight='0' content={dependencies!} />
          </Item.Content>
        )}
      </Item.Wrapper>
    )
  }
)

export default ToggleListItem
