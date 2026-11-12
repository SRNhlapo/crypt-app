function Coincard({
    symbol,
    name,
    price,
    change,
    color   
}) {
const positive = !change.startsWith('-')

    return (
<div className= "bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4">
    <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-white font-bold ${color}`}>
        {symbol[0]}
    </div>
    <div className="flex-1">
        <p className="text-sm text-gray-500">{name}</p>
        <p className="text-xl font-bold">{price}</p>
</div>
<span className={`ml-auto text-sm font-medium ${positive ? 'text-green-500' : 'text-red-600'}`}>
   {change}
</span>
</div>
    )
}


export default Coincard;

