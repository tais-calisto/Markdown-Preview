import styled from 'styled-components'
import '@fontsource/roboto-mono'

export const MarkdownInputStyle = styled.section`
  border-right: 1px solid ${(props) => props.theme.colors.text};
  padding: 0 0.5rem;

  div {
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    align-content: flex-end;
  }

  nav button {
    padding: 0 0.5rem;
  }

  button {
    cursor: pointer;
    font-size: 1.5rem;
    background: transparent;
    border: none;
    padding: 0;
    color: ${(props) => props.theme.colors.text};
  }

  button:hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  textarea {
    font-size: 1rem;
    width: 100%;
    height: 100vh;
    border: none;
    background: ${(props) => props.theme.colors.markdown};
    white-space: pre-wrap;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Roboto-mono', monospace;
  }

  @media (max-width: 768px) {
    textarea {
      height: 50vh;
    }
  }
`
