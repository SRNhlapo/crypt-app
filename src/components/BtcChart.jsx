import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import {btcPrices} from '../data'

function BtcChart () {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className= "font-semibold mb-4"> BTC Prices</h2>
            <div style={{width: '100%', height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">

                    <LineChart data= {btcPrices}>
                        <XAxis dataKey="month" axisLine={false} tickLine={false}/>
                        <YAxis 
                        axisLine={false} 
                        tickLine={false}
                        domain={[0, 800]}
                        ticks={[0, 200, 400, 600, 800]}
                        tickFormatter={(v) => (v === 0 ? '0' : `$${v}`)}
                         />
                        <Tooltip />
                        <Line type="monotone" dataKey="price" stroke="#4f46e5" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BtcChart 