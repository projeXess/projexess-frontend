/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importing Chart.js with auto mode for TypeScript

const BarChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    let myChart: Chart | null = null;

    useEffect(() => {
        // Create or update chart when component mounts or data changes
        if (chartRef.current) {
            if (myChart) {
                // Destroy previous chart instance
                myChart.destroy();
            }

            myChart = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    labels: ['Frontend', 'Designers', 'Backend', 'Engineers'],
                    datasets: [{
                        label: '.',
                        data: [12, 19, 3, 5],
                        backgroundColor: [
                            '#EC79F5',
                            '#9578FD',
                            '#4EE4CC',
                            '#A2A3FF',
                        ],
                        barThickness: 50,
                        borderRadius: 10,

                    }],
                },

                options: {
                    responsive: true
                }

            });

        }

        // Cleanup function to destroy chart when component unmounts
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, []); // No dependencies, runs once after initial render

    return <canvas ref={chartRef} />;
};

export default BarChart;
