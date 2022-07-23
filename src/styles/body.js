import styled from 'styled-components'

export const BodyStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
