import { useContext } from 'react'
import Switch from 'react-switch'
import { HeaderStyle } from '../styles/header.styled'
import { ThemeContext } from 'styled-components'

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <HeaderStyle>
      <h1>Markdown Preview</h1>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={colors.secundary}
        offHandleColor={colors.background}
        onHandleColor={colors.background}
      />
    </HeaderStyle>
  )
}

export default Header
