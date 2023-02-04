import styles from './Home.module.css'
import inicio from './inicio.svg'
import contatos from './contatos.svg'
import relatorios from './relatorios.svg'
import Inicio from '../../componentes/Inicio'

export default function Home({ email }) {
    return (
        <section className={styles.home}>
            <div className={styles.menu}>
                <img src={"/assets/imgs/tropa-digital.svg"} alt="logo tropa digital" />
                <nav>
                    <ul>
                        <li><img src={inicio} alt='icone inicio' />Início</li>
                        <li><img src={contatos} alt='icone contatos' />Contatos</li>
                        <li><img src={relatorios} alt="icone relatorios" />Relatórios</li>
                        <li><img src={contatos} alt='icone contatos' />Contatos</li>
                        <li><img src={contatos} alt='icone contatos' />Contatos</li>
                        <li><img src={contatos} alt='icone contatos' />Contatos</li>
                    </ul>
                </nav>
            </div>
            <Inicio nome={email}/>
        </section>
    )
}