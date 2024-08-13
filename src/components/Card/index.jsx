import styles from './Card.module.css'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Card({ nome, imagem_url, raridade, caixa_de_drop }) {
    return (


        <section className={styles.card}>
            <h3>{nome}</h3>
            <img src={imagem_url} alt="Img Skin" />
            <h3>{raridade}</h3>
            <h2>{caixa_de_drop}</h2>
        </section>

    )

}

export default Card