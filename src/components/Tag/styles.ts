import styled from 'styled-components'
import { Colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Colors.textColor};
  color: ${Colors.footerBackground};
  font-size: 12px;
  width: 72px;
  text-align: center;
  font-weight: 700;
  padding: 6px 10px;
  line-height: 14px;
  display: inline-block;
`
