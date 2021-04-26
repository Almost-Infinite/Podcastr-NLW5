import { useState } from 'react';
import styles from './styles.module.scss';
import { useTheme } from 'next-themes'

export default function DarkMode() {

    const { theme,setTheme } = useTheme();
    const [isActive, setActive] = useState(false);
    
    const toggleClass = () => {
        setActive(!isActive);
    };

    return (

        <div className={styles.darkMode} onLoad={() => setTheme('light')}>
            <button type="button" className={isActive ? styles.hidden : null} onClick={toggleClass}>
                <img src="/sol/sol.svg" onClick={() => setTheme('dark')} alt="" id={styles.sol} />
            </button>

            <button type="button" className={!isActive ? styles.hidden : null} onClick={toggleClass}>
                <img src="/lua/noite.svg" onClick={() => { setTheme('light') }} alt="" id={styles.lua} />
            </button>
        </div>

    )
}