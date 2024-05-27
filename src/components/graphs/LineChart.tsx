/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';


const LineChart = () => {

    const chartRef = useRef<HTMLCanvasElement>(null);
    let myChart: Chart | null = null;

    const data = {
        labels: ["Jun", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Regulatory",
                data: [12, 34, 2, 67, 12, 7, 10],
                backgroundColor: "#56FF47",
                borderColor: '#56FF47',
                pointStyle: 'line'
            },
            {
                label: "Technological",
                data: [23, 45, 12, 56, 45, 12, 7],
                backgroundColor: "#8378FF",
                borderColor: '#8378FF',
                pointStyle: 'line'
            },
            {
                label: "Economical",
                data: [1, 4, 6, 2, 7, 5, 3],
                backgroundColor: "#FF9999",
                borderColor: '#FF9999',
                pointStyle: 'line'
            },
        ]
    }

    useEffect(() => {

        if (chartRef.current) {
            if (myChart) {
                myChart.destroy();
            }

            myChart = new Chart(chartRef.current, {
                type: 'line',
                data,
                options: {
                    animation: {
                        duration: 2000,
                        easing: 'easeInBounce',
                    },
                    spanGaps: false,
                    responsive: true,
                    showLine: true,
                    scales: {
                        x: {
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            min:0,
                            grid: {
                                display: false
                            }
                        }
                    },
                    
                    plugins: {
                        legend: {
                            position: 'bottom',
                            align: 'center',
                            fullSize: true,
                            maxHeight: 25

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