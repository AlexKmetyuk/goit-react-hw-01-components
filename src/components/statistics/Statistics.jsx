import React from 'react'
import StatItem from './StatItem'

export default function Statistics({title, stats}) {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map((stat) => (
                    <StatItem key={stat.id} stat={stat} />
                ))}
            </ul>
        </section>
    )
}