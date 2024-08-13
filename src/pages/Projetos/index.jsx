import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'

function Projetos() {

    const [skins, setSkins] = useState([])

    useEffect(() => {
        const buscarSkins = async () => {
            try {
                const response = await fetch('./api.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSkins(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        buscarSkins()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Facas</h2>
            {
                skins.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            skins.map((skin) => (
                                <Card
                                    key={skin.id}
                                    nome={skin.nome}
                                    imagem_url={skin.imagem_url}
                                    raridade={skin.raridade}
                                    caixa_de_drop={skin.caixa_de_drop}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando skins...</p>
                )
            }
        </section>
    )
}

export default Projetos
