/**
 * Channel Strategy Optimizer
 * data.js - Sample data provider
 * 
 * This file contains sample data structures used by the application for demonstration purposes.
 * In a production environment, this would be replaced with API calls to a backend service.
 */

const ChannelStrategyData = {
    // Sample data for audience distribution over time
    audienceDistribution: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Broadcast TV',
                data: [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21],
                backgroundColor: 'rgba(220, 53, 69, 0.5)',
                borderColor: 'rgba(220, 53, 69, 1)',
                borderWidth: 1,
                stack: 'Stack 0',
            },
            {
                label: 'Cable TV',
                data: [25, 24, 24, 23, 22, 21, 21, 20, 19, 18, 18, 17],
                backgroundColor: 'rgba(255, 193, 7, 0.5)',
                borderColor: 'rgba(255, 193, 7, 1)',
                borderWidth: 1,
                stack: 'Stack 0',
            },
            {
                label: 'Streaming Platforms',
                data: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                backgroundColor: 'rgba(13, 110, 253, 0.5)',
                borderColor: 'rgba(13, 110, 253, 1)',
                borderWidth: 1,
                stack: 'Stack 0',
            },
            {
                label: 'Mobile App',
                data: [15, 16, 16, 17, 18, 18, 19, 20, 20, 21, 21, 22],
                backgroundColor: 'rgba(25, 135, 84, 0.5)',
                borderColor: 'rgba(25, 135, 84, 1)',
                borderWidth: 1,
                stack: 'Stack 0',
            },
            {
                label: 'Web Platform',
                data: [10, 10, 10, 10, 10, 11, 10, 10, 11, 11, 11, 11],
                backgroundColor: 'rgba(13, 202, 240, 0.5)',
                borderColor: 'rgba(13, 202, 240, 1)',
                borderWidth: 1,
                stack: 'Stack 0',
            }
        ]
    },
    
    // Sample data for audience migration trends
    audienceMigration: {
        labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'],
        datasets: [
            {
                label: 'Broadcast TV',
                data: [32, 28, 25, 22, 20, 18],
                borderColor: 'rgba(220, 53, 69, 1)',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Cable TV',
                data: [25, 23, 21, 19, 17, 15],
                borderColor: 'rgba(255, 193, 7, 1)',
                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Streaming Platforms',
                data: [18, 22, 25, 28, 31, 34],
                borderColor: 'rgba(13, 110, 253, 1)',
                backgroundColor: 'rgba(13, 110, 253, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Mobile App',
                data: [15, 17, 19, 21, 22, 23],
                borderColor: 'rgba(25, 135, 84, 1)',
                backgroundColor: 'rgba(25, 135, 84, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Web Platform',
                data: [10, 10, 10, 10, 10, 10],
                borderColor: 'rgba(13, 202, 240, 1)',
                backgroundColor: 'rgba(13, 202, 240, 0.1)',
                tension: 0.4,
                fill: true
            }
        ]
    },
    
    // Sample data for channel comparison
    channelComparison: {
        labels: ['Audience Size', 'Growth Rate', 'Engagement', 'Content Quality', 'Cost Efficiency'],
        datasets: [
            {
                label: 'Broadcast TV',
                data: [90, 30, 55, 80, 40],
                backgroundColor: 'rgba(220, 53, 69, 0.2)',
                borderColor: 'rgba(220, 53, 69, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(220, 53, 69, 1)'
            },
            {
                label: 'Cable TV',
                data: [75, 25, 50, 70, 45],
                backgroundColor: 'rgba(255, 193, 7, 0.2)',
                borderColor: 'rgba(255, 193, 7, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 193, 7, 1)'
            },
            {
                label: 'Streaming',
                data: [60, 85, 80, 75, 70],
                backgroundColor: 'rgba(13, 110, 253, 0.2)',
                borderColor: 'rgba(13, 110, 253, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(13, 110, 253, 1)'
            },
            {
                label: 'Mobile App',
                data: [55, 90, 85, 65, 80],
                backgroundColor: 'rgba(25, 135, 84, 0.2)',
                borderColor: 'rgba(25, 135, 84, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(25, 135, 84, 1)'
            }
        ]
    },
    
    // Sample data for ROI projection
    roiProjection: {
        labels: ['Initial', 'Year 1', 'Year 2', 'Year 3'],
        datasets: [
            {
                label: 'Cumulative ROI',
                data: [-1, 0.8, 1.9, 2.8],
                borderColor: 'rgba(13, 110, 253, 1)',
                backgroundColor: 'rgba(13, 110, 253, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Broadcast TV (Comparison)',
                data: [-1, 0.3, 1.1, 1.7],
                borderColor: 'rgba(220, 53, 69, 1)',
                backgroundColor: 'transparent',
                borderDash: [5, 5],
                tension: 0.4,
                fill: false
            },
            {
                label: 'Mobile App (Comparison)',
                data: [-1, 0.9, 2.0, 2.9],
                borderColor: 'rgba(25, 135, 84, 1)',
                backgroundColor: 'transparent',
                borderDash: [5, 5],
                tension: 0.4,
                fill: false
            }
        ]
    },
    
    // Sample data for strategy radar chart
    strategyRadar: {
        labels: ['Broadcast TV', 'Cable TV', 'Streaming', 'Mobile App', 'Web Platform', 'Social Media'],
        datasets: [
            {
                label: 'Current Allocation',
                data: [35, 25, 15, 12, 8, 5],
                backgroundColor: 'rgba(13, 202, 240, 0.2)',
                borderColor: 'rgba(13, 202, 240, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(13, 202, 240, 1)'
            },
            {
                label: 'Recommended Allocation',
                data: [12, 8, 35, 30, 10, 5],
                backgroundColor: 'rgba(13, 110, 253, 0.2)',
                borderColor: 'rgba(13, 110, 253, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(13, 110, 253, 1)'
            }
        ]
    },
    
    // KPI data for dashboard
    kpiData: {
        totalAudience: {
            value: '4.2M',
            change: '+5.2%',
            trend: 'up'
        },
        channelShiftRate: {
            value: '12.8%',
            change: '+3.4%',
            trend: 'up'
        },
        averageRoi: {
            value: '2.4x',
            change: '+0.3x',
            trend: 'up'
        },
        optimizationScore: {
            value: '76/100',
            change: '-2 pts',
            trend: 'down'
        }
    },
    
    // Sample channel performance metrics
    channelPerformance: [
        { name: 'Mobile App', icon: 'fa-mobile-alt', value: '3.4x', iconClass: 'text-primary' },
        { name: 'Web Platform', icon: 'fa-laptop', value: '2.9x', iconClass: 'text-success' },
        { name: 'Connected TV', icon: 'fa-tv', value: '2.6x', iconClass: 'text-info' },
        { name: 'Live Streaming', icon: 'fa-podcast', value: '2.2x', iconClass: 'text-warning' },
        { name: 'Broadcast TV', icon: 'fa-broadcast-tower', value: '1.7x', iconClass: 'text-danger' }
    ],
    
    // Data access methods
    getData: function(dataType, filters = {}) {
        // This function would normally apply filters to the data
        // For the demo, we're just returning the sample data
        return this[dataType];
    },
    
    // Data storage methods for persistence (using localStorage in the demo)
    saveUserData: function(key, data) {
        try {
            localStorage.setItem('channel-optimizer-' + key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Error saving data:', e);
            return false;
        }
    },
    
    getUserData: function(key) {
        try {
            const data = localStorage.getItem('channel-optimizer-' + key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error retrieving data:', e);
            return null;
        }
    },
    
    // Method to export all data as JSON
    exportAllData: function() {
        const exportData = {
            audienceDistribution: this.audienceDistribution,
            audienceMigration: this.audienceMigration,
            channelComparison: this.channelComparison,
            roiProjection: this.roiProjection,
            strategyRadar: this.strategyRadar,
            kpiData: this.kpiData,
            channelPerformance: this.channelPerformance,
            userSettings: {}
        };
        
        // Add any user settings stored in localStorage
        const userKeys = ['preferences', 'customFilters', 'savedReports'];
        userKeys.forEach(key => {
            const data = this.getUserData(key);
            if (data) exportData.userSettings[key] = data;
        });
        
        return exportData;
    },
    
    // Method to import data from JSON
    importData: function(jsonData) {
        try {
            const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
            
            // Validate data structure before importing
            if (!data.audienceDistribution || !data.audienceMigration) {
                throw new Error('Invalid data format');
            }
            
            // Import core data models
            const dataTypes = [
                'audienceDistribution', 'audienceMigration', 'channelComparison',
                'roiProjection', 'strategyRadar', 'kpiData', 'channelPerformance'
            ];
            
            dataTypes.forEach(type => {
                if (data[type]) this[type] = data[type];
            });
            
            // Import user settings to localStorage
            if (data.userSettings) {
                Object.keys(data.userSettings).forEach(key => {
                    this.saveUserData(key, data.userSettings[key]);
                });
            }
            
            return true;
        } catch (e) {
            console.error('Error importing data:', e);
            return false;
        }
    }
};