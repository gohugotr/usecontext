# useContext

## `Projenin Kurulumu`

- `yarn create vite` dedikten sonra proje adı verilir. Biz proje adını `usecontext`olarak verdik. Otomatik olarak `usecontext` klasörü açılır. Devamında `react`seçilir.
- `cd usecontext`
- `yarn`
- `yarn dev` ile uygulama çalıştırılır. `http://localhost:3000/` adresinden uygulamaya erişilebilir.

## useContext Kullanım Örneği

Context hook, uygulama genelinde çok yüklü olmayan değişkenleri prop kullanmadan tüm componentler arasında paylaşma amacıyla kullanılabiir. Çok sık güncellenen değerler için kullanılmamalı. Bu amaçla redux kullanılabilir.

Örnek: Oturum açan kullanıcı bilgisi, tema bilgisi (Dark, Light vb.)

Kullanım 3 adımda olur.

- ThemeContext tanımlanır ve default değeri verilir.
`const ThemeContext = React.createContext(theme.dark);`

- 2. Adım Provider sağlanır.

```js script
 <ThemeContext.Provider value={tema}>
    <Content />
</ThemeContext.Provider>
```

- 3. Adım `<Content />` componentinde

```js script
const tema = useContext(ThemeContext);
```

tanımlayarak, aşağıdaki gibi kullan

```html
<div style={{ background: tema.background, color: tema.foreground }}> ... </div>
```

### App.jsx kodları

```js script
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

export const ThemeContext = React.createContext(themes.dark)

const App = () => {
  const [tema, setTema] = useState({});

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

export default App;
```

### Content.jsx kodları

```js script
import React, { useContext }  from 'react'
import { ThemeContext} from './App'

const Content = () => {
  const tema = useContext(ThemeContext);
  //console.log(tema);
  return (
      <div style={{ margin:'1em',padding:'10px',background: tema.background, color: tema.foreground }}>
        <h2>Context Hook Api kullanımı</h2>
        <p>
          Context, prop’ları ...
        </p>
      </div>
  )
}

export default Content;
```
