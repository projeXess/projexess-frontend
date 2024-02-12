import React from 'react'
import dynamic    from 'next/dynamic'
import { Bar } from 'react-chartjs-2'
type Props = {}

function BarChart({ }: Props) {
    return (
        <Bar
            data={{
                xLabels: ['jun', 'jul', 'aug', 'sep', 'oct'],
                labels: ['jun', 'jul', 'aug', 'sep', 'oct'],
                datasets: [
                    {
                        data: [12],
                    },
                    {
                        data: [5],
                    },
                    {
                        data: [15],
                    },
                    {
                        data: [20],
                    },
                    {
                        data: [2],
                    }
                ]
            }}
        />
    )
}

export default BarChart