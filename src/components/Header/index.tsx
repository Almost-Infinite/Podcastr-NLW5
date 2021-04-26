import styles from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import DarkMode from '../DarkMode';



export default function Header() {
    const currentDate = format(new Date, 'EEEEEE, d, MMMM', {
        locale: ptBR
    })

    return (
        <header className={styles.headerContainer}>
            <Link href={'/'} >
                <a>
                    <img src="/logo.svg" alt="PodCastr" id={styles.logo}/>
                </a>
            </Link>
            <p>O Melhor para voce ouvir sempre</p> 

            <DarkMode/>

            <span>{currentDate}</span>
        </header>
    );
} 31