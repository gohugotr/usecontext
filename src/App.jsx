import React from 'react'
import './App.css'
import { useState } from 'react'
import Content from './Content'

const themes = {
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
}

// 1. Adım
export const ThemeContext = React.createContext(themes.dark)
// 2. Adım Provider sağla.
// <ThemeContext.Provider value={tema}>
//    <Content />
// </ThemeContext.Provider>
// 3. Adım <Content /> compennetinde const tema = useContext(ThemeContext); tanımlayarak kullan
// <div style={{ background: tema.background, color: tema.foreground }}>

const App = () => {
  const [tema, setTema] = useState(themes.dark)

  const toggleTema = () => {
    if (tema === themes.dark) {
      setTema(themes.light)
    } else {
      setTema(themes.dark)
    }
  }

  return (
    <div>
      <ThemeContext.Provider value={tema}>
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <button
            style={{
              marginTop: '1em',
              padding: '10px',
              background: tema.background,
              color: tema.foreground,
            }}
            onClick={() => {
              toggleTema()
            }}
          >
            {tema === themes.dark ? 'Dark' : 'Light'} Tema
          </button>
        </div>

        <Content />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
