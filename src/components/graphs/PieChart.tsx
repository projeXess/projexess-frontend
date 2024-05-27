/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';

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
                    labels: ['Nyarugenge', 'Kicukiro', 'Gasabo'], // Added labels
                    datasets: [
                        {
                            label: 'Cases',
                            data: [15, 25, 60], 
                            backgroundColor: ['#56FF47', '#8378FF', '#FF9999'], 
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
            });
        }

        return () => {
            if (myChart) {
                myChart.destroy();
            }
        }
    }, []);

    return <canvas ref={chartRef} width="400" height="400" />; // Ensure the canvas has size

}

export default PieChart;
