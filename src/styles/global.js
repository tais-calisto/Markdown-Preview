import { createGlobalStyle } from 'styled-components'
import '@fontsource/nunito'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font-family: 'Nunito', sans-serif;
    }

`

export default GlobalStyle
