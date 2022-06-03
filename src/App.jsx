import { useState } from 'react'
import './App.css'
import Content from '../Content'

const  App = () => {
  const [theme, setTheme] = useState()

  return (
    <div className="App">
        <Content />
    </div>
  )
}

export default App;
