import { useEffect, useState } from 'react';
import type { SubmitEvent } from 'react';
import styles from './home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

//https://coinlib.io/api/v1/coinlist?key=305ea8f45f278341&pref=BTC&page=1&order=volume_desc

interface CoinsProps {
    name: string;
    delta_24h: string;
    price: string;
    symbol: string;
    volume_24h: string;
    market_cap: string;
    formattedPrice: string;
    formattedMarket: string;
    numberDelta: number
}

interface DataProps{
    coins: CoinsProps[];
}

export function Home() {
    const [coins, setCoins]  = useState<CoinsProps[]>([])
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        function getData() {
            fetch('https://sujeitoprogramador.com/api-cripto/?key=305ea8f45f278341&pref=BRL')
            .then(response => response.json())
            .then( (data: DataProps) => {
                //Request successfuly
                let coinsData = data.coins.slice(0, 15);

                let price = Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: 'BRL'
                })

                const formatResult = coinsData.map((item) => {
                    const formatted = {
                        ...item,
                        formattedPrice: price.format(Number(item.price)),
                        formattedMarket: price.format(Number(item.market_cap)),
                        numberDelta: parseFloat(item.delta_24h.replace(",", "."))
                    }

                    return formatted;
                })

                setCoins(formatResult);
            })
            
        }

        getData()

    }, [])

    function handleSearch(e: SubmitEvent) {
        e.preventDefault();
        if(inputValue === '') return;

        navigate(`/detail/${inputValue}`)
    }

    return (
        <main className={styles.container}>
            <form className={styles.form} onSubmit={handleSearch}>
                <input 
                placeholder="Digite o nome da criptomoeda: BTC..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button type='submit'>
                    <BiSearch size={30} color="#fff" />
                </button>

            </form>

            <table>
                <thead>
                    <tr>
                        <th scope='col'>Moedas</th>
                        <th scope='col'>Valor Mercado</th>
                        <th scope='col'>Preço</th>
                        <th scope='col'>Volume</th>

                    </tr>
                </thead>

                <tbody id="tbody">
                    {coins.map(coin  => (
                        <tr key={coin.name} className={styles.tr}>
                        <td className={styles.tdLabel} data-label="Moedas">
                            <Link className={styles.link} to={`/detail/${coin.symbol}`}>
                                <span >{coin.name}</span> | {coin.symbol}
                            </Link>
                        </td>
                        <td className={styles.tdLabel} data-label="Valor Mercado">
                            {coin.formattedMarket}
                        </td>
                        <td className={styles.tdLabel} data-label="volume">
                            {coin.formattedPrice}
                        </td>
                        <td className={coin.numberDelta >= 0 ? styles.tdProfit : styles.tdLoss} data-label="Volume">
                            <span >{coin.delta_24h}</span>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </main>  
        
    )
}