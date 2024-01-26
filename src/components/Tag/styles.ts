import styled from 'styled-components'
import { Colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Colors.textColor};
  color: ${Colors.mainBackground};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '14px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
  margin-right: 6px;
`
