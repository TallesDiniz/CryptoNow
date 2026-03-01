import { useEffect, useState } from 'react'
import styles from './detail.module.css'
import { useParams, useNavigate } from 'react-router-dom'

interface CoinProp{
    symbol: string;
    name: string;
    price: string;
    market_cap: string;
    low_24h: string;
    high_24h: string;
    total_volume_24h: string;
    delta_24h: string;
    formattedPrice: string;
    formatterdMarket: string;
    formattedLowPrice: string;
    formattedHighPrice: string;
    error?: string;
    numberDelta: number;
}

export function Detail() {
    const {cripto} = useParams()
    const [detail, setDetail] = useState<CoinProp>()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        function getData(){
            fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=305ea8f45f278341&pref=BRL&symbol=${cripto}`)
            .then(response => response.json())
            .then((data:CoinProp) => {

                if(data.error){
                    navigate('/')
                    return
                }

                

                let price = Intl.NumberFormat("pt-BR", {
                    style: 'currency',
                    currency:  'BRL'
                })

                const resultData = {
                    ...data,
                    formattedPrice: price.format(Number(data.price)),
                    formatterdMarket: price.format(Number(data.market_cap)),
                    formattedLowPrice: price.format(Number(data.low_24h)),
                    formattedHighPrice: price.format(Number(data.high_24h)),
                    numberDelta: parseFloat(data.delta_24h.replace(",", "."))
                }

                setDetail(resultData);
                setLoading(false);

            })
            .catch(() => {
                navigate('/')
            })
            
        }

        getData()
    }, [cripto])

    if(loading){
        return(
            <div className={styles.container}>
                <h4 className={styles.center}>Carregando informações...</h4>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.center}>{detail?.name}</h1>
            <p className={styles.center}>{detail?.symbol}</p>

            <section className={styles.content}>
                <p>
                    <strong>Preço: </strong> {detail?.formattedPrice}
                </p>
                <p>
                    <strong>Maior preço 24h: </strong> {detail?.formattedHighPrice}
                </p>
                <p>
                    <strong>Menor preço 24h: </strong> {detail?.formattedLowPrice}
                </p>
                <p>
                    <strong>Delta 24h: </strong> 
                    <span className={detail?.numberDelta && detail?.numberDelta >= 0 ? styles.profit : styles.loss}>
                        {detail?.delta_24h}
                    </span>
                </p>
                <p>
                    <strong>Valor mercado: </strong> {detail?.formatterdMarket}
                </p>
            </section>
        </div>  
        
    )
}