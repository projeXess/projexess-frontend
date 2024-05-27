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
                    labels: ['Project Manager', 'Frontend', 'Designers', 'Backend', 'Data Analyst', 'Field Technician'],
                    datasets: [{
                        label: '.',
                        data: [5, 1, 1, 1, 2, 1],
                        backgroundColor: [
                            '#f55442',
                            '#7FFFD4',
                            '#FFA07A',
                            '#87CEEB',
                            '#FF69B4',
                            '#8A2BE2    '
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
