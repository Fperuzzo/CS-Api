import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Contatos.module.css'
import { BsInstagram } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
          
            <Container>
                <section className={styles.contatos}>
                    <h2>Contatos</h2>

                    <h1>Entre em contato conosco!</h1>
                
                    <div className={styles.icones}>
                        
                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>

                    </div>

                </section>
            </Container>
           
        </>
    )
}

export default Contatos
