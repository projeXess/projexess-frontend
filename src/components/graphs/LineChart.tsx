/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';


const LineChart = () => {

    const chartRef = useRef<HTMLCanvasElement>(null);
    let myChart: Chart | null = null;

    useEffect(() => {

        if (chartRef.current) {
            if (myChart) {
                myChart.destroy();
            }

            myChart = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: ["Jun", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: "Designers",
                            data: [12, 34, 2, 67, 12, 7, 10],
                            backgroundColor: "#56FF47"

                        },
                        {
                            label: "Backend",
                            data: [23, 45, 12, 56, 45, 12, 7],
                            backgroundColor: "#8378FF"

                        },
                        {
                            label: "Frontend",
                            data: [1, 4, 6, 2, 7, 5, 3],
                            backgroundColor: "#FF9999"

                        },
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',

                        }
                    }
                }


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

export default LineChart;