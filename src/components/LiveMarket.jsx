import MarketRow from './MarketRow'
import { market } from '../data'

function LiveMarket() {
    return(
        <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h2 className="font-semibold mb-2">Live Market</h2>
            {market.map((row) => (
                <MarketRow key={row.id} {...row} />
            ))}
        </div>
    )
}

export default LiveMarket