import {AreaChart, Area, ResponsiveContainer } from 'recharts'

function MarketRow({ name, symbol, change, price, stroke, trend }) {
    const positive = !change.startsWith('-')
    return (
        <div className="flex items-center py-3 border-t border-gray-100">
            <div className= "flex-1">
                <p className= "font-semibold">{name}</p>
                <p className= "text-sm text-gray-500">{symbol}</p>
            </div>
            <span className={`w-24 ${positive ? 'text-green-600' : 'text-red-600'}`}>
                {change}
                </span>
                <span className= "w-24 text-right">{price}</span>
        <div className="w-28 h-10 hidden sm:block">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trend.map((v) => ({v}))}>
                <Area type="monotone" dataKey="v" stroke={stroke} fill={stroke} fillOpacity={0.15} strokeWidth={2} />
            </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>
    )
}

export default MarketRow