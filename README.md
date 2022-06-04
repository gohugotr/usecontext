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

- 
