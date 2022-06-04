import React, { useContext }  from 'react'
import { ThemeContext} from './App'

const Content = () => {

  const tema = useContext(ThemeContext);
  //console.log(tema);
  return (
      <div style={{ margin:'1em',padding:'10px',background: tema.background, color: tema.foreground }}>
        <h2>Context Hook Api kullanımı</h2>
        <p>
          Context, prop’ları her seviyede manuel olarak geçmek zorunda kalmadan bileşen ağacı
          üzerinden veri iletmenin bir yolunu sağlar.
        </p>
        <p>
          Bir context objesi alır (React.createContext‘den döndürülen değer) ve mevcut context için
          o andaki context değerini döndürür. Mevcut context değeri, bileşen ağacında yukarı doğru
          çıkarken en yakında bulunan MyContext.Provider ifadesinin value değeri tarafından belirlenir. Yukarı doğru en yakındaki MyContext.Provider
          güncellendiğinde, bu Hook en güncel context value değerini MyContext sağlayıcısına
          göndererek bir yeniden-render işlemi tetikler. Yukarıdaki bileşenler React.memo ya da
          shouldComponentUpdate kullansa bile, yeniden-render işlemi useContext‘i kullanan
          bileşenden başlayarak yine de gerçekleşir. useContext‘e girilen argümanın context
          objesinin kendisi olduğunu unutmayın:
        </p>
      </div>
  )
}

export default Content;
