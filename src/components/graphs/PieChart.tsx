/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import Chart, {  } from 'chart.js/auto';

const PieChart = () => {

    const chartRef = useRef<HTMLCanvasElement>(null);
    let myChart: any | null = null;


    useEffect(() => {

        if (chartRef.current) {
            if (myChart) {
                myChart.destroy();
            }

            myChart = new Chart(chartRef.current, {
                type: 'pie',
                data: {
                    datasets: [
                        {
                            label: 'Worst Case',
                            data: 75,
                            backgroundColor: '#56FF47',
                        },
                        {
                            label: "Moderate",
                            data: 4,
                            backgroundColor: '#8378FF',
                        },
                        {
                            label: "Best Case",
                            data: 24,
                            backgroundColor: "#FF9999"
                        }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            position: 'right',
                        },

                    }
                },

            })
        }

        return () => {
            if (myChart) {
                myChart.destroy()
            }
        }
    }, [])


    return <canvas ref={chartRef} />

}

export default PieChart;