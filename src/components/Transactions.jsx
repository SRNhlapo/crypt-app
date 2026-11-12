import TransactionRow from "./TransactionRow"
import {transactions} from "../data"

function Transactions () {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h2 className="font-semibold mb-2">Transactions</h2>
            {transactions.map((t) => (
                <TransactionRow key={t.id} {...t} />
            ))}
        </div>
    )
}

export default Transactions