import '../styles/global.scss'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Player from '../components/Player'
import styles from '../styles/app.module.scss'
import { PlayerContextProvider } from '../contexts/PlayerContext'


function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <ThemeProvider   defaultTheme="light"  storageKey='light'>
          <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp
