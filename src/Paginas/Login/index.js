import styles from './Login.module.css'
import logo from './tropa-digital.svg';
import fundo from './fundo.png'
import notebook from './notebook.svg'
import { useNavigate } from 'react-router-dom';

export default function Login({setEmail}) {

    const navigate = useNavigate()

    function avançarHome(e){
        e.preventDefault();
        navigate("/home")
    }

    return(
        <section>
            <div className={styles.container}>
                <div className={styles.container__login}>
                    <img src={logo} alt="logo tropa digital"/>
                    <div className={styles.container__login_form}>
                        <h2>Bem Vindo ao <span>painel</span></h2>
                        <form onSubmit={avançarHome}>
                            <input type="email" placeholder="Digite seu email" required onChange={(e) => setEmail(e.target.value)}/>
                            <input type="password" placeholder="Digite sua senha" className={styles.senha} required/>
                            <button>Acessar</button>
                        </form>
                    </div>
                </div>

                <div className={styles.container__imagem}>
                    <img src={fundo} alt="céu à noite estrelado"/>
                    <img src={notebook} alt="pessoa programando no notebook" className={styles.notebook}/>
                </div>
            </div>
        </section>
    )
}