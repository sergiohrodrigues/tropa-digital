import styles from './Inicio.module.css'
import imagem from './imagem.jpg'
import caderno from './caderno.svg'

export default function Inicio({ nome }) {
    return (
        <section className={styles.conteudo}>
            <h2>Olá {nome}</h2>
            <hr />
            <div className={styles.inicio}>
                <div className={styles.card}>
                    <img src={imagem} alt="mulher tirando foto com celular do mar" />
                    <span><img src={caderno} alt="icone de um caderno" /> 2min atrás</span>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p>
                </div>
                <div className={styles.card}>
                    <img src={imagem} alt="mulher tirando foto com celular do mar" />
                    <span><img src={caderno} alt="icone de um caderno" /> 2min atrás</span>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p>
                </div>
                <div className={styles.card}>
                    <img src={imagem} alt="mulher tirando foto com celular do mar" />
                    <span><img src={caderno} alt="icone de um caderno" /> 2min atrás</span>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p>
                </div>
                <div className={styles.card}>
                    <img src={imagem} alt="mulher tirando foto com celular do mar" />
                    <span><img src={caderno} alt="icone de um caderno" /> 2min atrás</span>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p>
                </div>
                <div className={styles.card}>
                    <img src={imagem} alt="mulher tirando foto com celular do mar" />
                    <span><img src={caderno} alt="icone de um caderno" /> 2min atrás</span>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p>
                </div>
                <div className={styles.card}>
                    <img src={imagem} alt="mulher tirando foto com celular do mar" />
                    <span><img src={caderno} alt="icone de um caderno" /> 2min atrás</span>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p>
                </div>
            </div>
        </section>
    )
}