import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'
import cbum from '../../assets/cbum.png'

function Home() {
    return (
        <>

            <Container>
                <section className={styles.home}>
                    <div className={styles.apresentacao}>
                        <p>
                            As melhores skin do mercado <br />
                            <span>Com os melhores preços</span>

                        </p>
                        <Link to="/skins" className={`${styles.btn} ${styles.btn_red}`}>
                            Saiba mais
                        </Link>
                    </div>
                    <figure>
                        <img className={styles.img_home} src={cbum} alt="Imagem de Home" />
                    </figure>
                </section>
            </Container>

        </>
    )
}

export default Home
