function TransactionRow({ coin, type, amount, date }) {
    const isBuy = type === 'Buy'
    return (
        <div className="flex items-center gap-3 py-3 border-t border-gray-100">
            <span className={`w-3 h-3 rounded-full ${isBuy ? 'bg-green-500' : 'bg-red-500'}`}></span>
        <div className="flex-1">
            <p className="font-semibold">{coin}</p>
            <p className="text-sm text-gray-500">{type}</p>
        </div>
        <div className="text-right">
            <p className="font-semibold">{amount}</p>
            <p className="text-sm text-gray-500">{date}</p>
        </div>
        </div>
    )
}

export default TransactionRow