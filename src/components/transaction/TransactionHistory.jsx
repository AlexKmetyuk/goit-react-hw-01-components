import React from 'react'
import TransactionItem from './TransactionItem'

export default function TransactionHistory({transaction}) {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transaction.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction}/>
                ))}
            </tbody>
        </table>
    )
}