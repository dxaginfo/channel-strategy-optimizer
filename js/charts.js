/**
 * Channel Strategy Optimizer
 * charts.js - Chart generation and visualization engine
 * 
 * This file contains functions for creating and updating charts using Chart.js.
 * It handles all visualization logic for the application's analytics features.
 */

const ChannelStrategyCharts = {
    // Store references to chart instances for later updates
    chartInstances: {},
    
    // Default chart options
    defaultOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    padding: 15
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: 10,
                caretSize: 6,
                titleFont: {
                    size: 14
                },
                bodyFont: {
                    size: 13
                }
            }
        }
    },
    
    // Initialize all charts on the page
    initCharts: function() {
        this.createChannelDistributionChart();
        this.createAudienceMigrationChart();
    },
    
    // Create the main dashboard channel distribution chart
    createChannelDistributionChart: function() {
        const ctx = document.getElementById('channelDistributionChart')?.getContext('2d');
        if (!ctx) return null;
        
        const data = ChannelStrategyData.getData('audienceDistribution');
        
        // Destroy existing instance if it exists
        if (this.chartInstances.channelDistribution) {
            this.chartInstances.channelDistribution.destroy();
        }
        
        this.chartInstances.channelDistribution = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                ...this.defaultOptions,
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    ...this.defaultOptions.plugins,
                    tooltip: {
                        ...this.defaultOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
        
        return this.chartInstances.channelDistribution;
    },
    
    // Create audience migration trend chart
    createAudienceMigrationChart: function() {
        const ctx = document.getElementById('audienceMigrationChart')?.getContext('2d');
        if (!ctx) return null;
        
        const data = ChannelStrategyData.getData('audienceMigration');
        
        // Destroy existing instance if it exists
        if (this.chartInstances.audienceMigration) {
            this.chartInstances.audienceMigration.destroy();
        }
        
        this.chartInstances.audienceMigration = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                ...this.defaultOptions,
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        min: 0
                    }
                },
                plugins: {
                    ...this.defaultOptions.plugins,
                    tooltip: {
                        ...this.defaultOptions.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
        
        return this.chartInstances.audienceMigration;
    },
    
    // Update a chart with new data
    updateChart: function(chartId, newData, options = {}) {
        const chart = this.chartInstances[chartId];
        if (!chart) return false;
        
        chart.data = newData;
        if (options) {
            chart.options = { ...chart.options, ...options };
        }
        
        chart.update();
        return true;
    },
    
    // Export a chart as an image
    exportChartAsImage: function(chartId, fileName = 'chart.png') {
        const chart = this.chartInstances[chartId];
        if (!chart) return false;
        
        const link = document.createElement('a');
        link.download = fileName;
        link.href = chart.toBase64Image();
        link.click();
        
        return true;
    },
    
    // Resize charts when window size changes
    handleResize: function() {
        Object.values(this.chartInstances).forEach(chart => {
            if (chart) chart.resize();
        });
    }
};

// Add resize event listener
window.addEventListener('resize', () => {
    ChannelStrategyCharts.handleResize();
});