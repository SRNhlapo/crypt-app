import CoinCard from './CoinCard'
import { coins } from '../data'

function Coins() {
    return (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {coins.map((coin) => (
            <CoinCard
                key={coin.id} {...coin}
            />
        ))}
        </section>
    )
}

export default Coins;