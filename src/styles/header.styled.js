import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  background: ${(props) => props.theme.colors.primary};
`
