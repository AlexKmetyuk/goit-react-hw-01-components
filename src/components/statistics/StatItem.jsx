import React from 'react'

export default function StatItem({stat}) {
    return (
        <li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
        </li>
    )
}