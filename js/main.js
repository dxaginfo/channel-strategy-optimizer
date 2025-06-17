/**
 * Channel Strategy Optimizer
 * main.js - Main application logic
 * 
 * This file contains the core functionality of the Channel Strategy Optimizer app,
 * including initialization, event handlers, and application logic.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
    
    // Handle events
    setupEventListeners();
});

/**
 * Initialize the application
 */
function initApp() {
    // Initialize charts
    ChannelStrategyCharts.initCharts();
    
    // Populate dynamic content from data
    populateKPICards();
    populateTopChannelsList();
    
    // Check for user settings in localStorage and apply them
    loadUserSettings();
    
    // Log initialization
    console.log('Channel Strategy Optimizer initialized');
}

/**
 * Set up event listeners for UI interaction
 */
function setupEventListeners() {
    // Dashboard period filter buttons
    document.querySelectorAll('#lastMonth, #lastQuarter, #lastYear, #customRange').forEach(btn => {
        btn.addEventListener('click', handlePeriodFilter);
    });
    
    // Import/Export data buttons
    document.getElementById('importDataBtn')?.addEventListener('click', handleDataImport);
    document.getElementById('exportDataBtn')?.addEventListener('click', handleDataExport);
    
    // Navigation smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.navbar .nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Dropdown selection changes
    document.getElementById('demographicFilter')?.addEventListener('change', handleDemographicFilter);
    document.getElementById('contentTypeFilter')?.addEventListener('change', handleContentTypeFilter);
    document.getElementById('timePeriodFilter')?.addEventListener('change', handleTimePeriodFilter);
    document.getElementById('viewTypeFilter')?.addEventListener('change', handleViewTypeFilter);
}

/**
 * Event handler for period filter buttons in dashboard
 */
function handlePeriodFilter(e) {
    // Remove active class from all buttons
    document.querySelectorAll('#lastMonth, #lastQuarter, #lastYear, #customRange').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // Update charts based on selected period
    // This would normally fetch data for the selected period
    // For demo, we're just showing a different predefined dataset
    
    // Simulate data update with slight variations
    const data = ChannelStrategyData.getData('audienceDistribution');
    
    // Apply random variation to demonstrate period change
    const variation = 0.1; // 10% max variation
    const updatedData = {
        ...data,
        datasets: data.datasets.map(dataset => ({
            ...dataset,
            data: dataset.data.map(value => {
                const randomFactor = 1 + (Math.random() * variation * 2 - variation);
                return Math.round(value * randomFactor);
            })
        }))
    };
    
    // Update the chart
    ChannelStrategyCharts.updateChart('channelDistribution', updatedData);
    
    // Update KPI cards to match the period
    updateKpiForPeriod(e.target.id);
}

/**
 * Update KPI cards based on selected time period
 */
function updateKpiForPeriod(periodId) {
    // Define variations for different periods
    const periodData = {
        lastMonth: {
            totalAudience: { value: '4.0M', change: '+3.8%', trend: 'up' },
            channelShiftRate: { value: '9.6%', change: '+2.1%', trend: 'up' },
            averageRoi: { value: '2.2x', change: '+0.1x', trend: 'up' },
            optimizationScore: { value: '74/100', change: '+1 pt', trend: 'up' }
        },
        lastQuarter: {
            totalAudience: { value: '4.2M', change: '+5.2%', trend: 'up' },
            channelShiftRate: { value: '12.8%', change: '+3.4%', trend: 'up' },
            averageRoi: { value: '2.4x', change: '+0.3x', trend: 'up' },
            optimizationScore: { value: '76/100', change: '-2 pts', trend: 'down' }
        },
        lastYear: {
            totalAudience: { value: '4.6M', change: '+8.7%', trend: 'up' },
            channelShiftRate: { value: '15.3%', change: '+4.9%', trend: 'up' },
            averageRoi: { value: '2.7x', change: '+0.5x', trend: 'up' },
            optimizationScore: { value: '79/100', change: '+4 pts', trend: 'up' }
        },
        customRange: {
            totalAudience: { value: '4.4M', change: '+6.5%', trend: 'up' },
            channelShiftRate: { value: '14.2%', change: '+4.0%', trend: 'up' },
            averageRoi: { value: '2.5x', change: '+0.4x', trend: 'up' },
            optimizationScore: { value: '77/100', change: '+1 pt', trend: 'up' }
        }
    };
    
    const data = periodData[periodId] || periodData.lastQuarter;
    
    // Update KPI card elements
    document.getElementById('totalAudience').textContent = data.totalAudience.value;
    document.getElementById('channelShiftRate').textContent = data.channelShiftRate.value;
    document.getElementById('averageRoi').textContent = data.averageRoi.value;
    document.getElementById('optimizationScore').textContent = data.optimizationScore.value;
    
    // Update badges
    const badges = document.querySelectorAll('.card-body .badge');
    badges[0].textContent = `${data.totalAudience.change} ${data.totalAudience.trend === 'up' ? '↑' : '↓'}`;
    badges[1].textContent = `${data.channelShiftRate.change} ${data.channelShiftRate.trend === 'up' ? '↑' : '↓'}`;
    badges[2].textContent = `${data.averageRoi.change} ${data.averageRoi.trend === 'up' ? '↑' : '↓'}`;
    badges[3].textContent = `${data.optimizationScore.change} ${data.optimizationScore.trend === 'up' ? '↑' : '↓'}`;
    
    // Update badge colors
    badges[0].className = `badge ${data.totalAudience.trend === 'up' ? 'bg-success' : 'bg-danger'}`;
    badges[1].className = `badge ${data.channelShiftRate.trend === 'up' ? 'bg-danger' : 'bg-success'}`; // Channel shift is negative for traditional channels
    badges[2].className = `badge ${data.averageRoi.trend === 'up' ? 'bg-success' : 'bg-danger'}`;
    badges[3].className = `badge ${data.optimizationScore.trend === 'up' ? 'bg-success' : 'bg-warning'}`;
}

/**
 * Populate KPI cards with data
 */
function populateKPICards() {
    const kpiData = ChannelStrategyData.getData('kpiData');
    
    document.getElementById('totalAudience').textContent = kpiData.totalAudience.value;
    document.getElementById('channelShiftRate').textContent = kpiData.channelShiftRate.value;
    document.getElementById('averageRoi').textContent = kpiData.averageRoi.value;
    document.getElementById('optimizationScore').textContent = kpiData.optimizationScore.value;
}

/**
 * Populate top channels list with data
 */
function populateTopChannelsList() {
    const channelData = ChannelStrategyData.getData('channelPerformance');
    const listContainer = document.getElementById('topChannelsList');
    
    if (!listContainer) return;
    
    // Clear existing content
    listContainer.innerHTML = '';
    
    // Add each channel
    channelData.forEach(channel => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            <span><i class="fas ${channel.icon} ${channel.iconClass} me-2"></i> ${channel.name}</span>
            <span>${channel.value}</span>
        `;
        listContainer.appendChild(listItem);
    });
}

/**
 * Handle demographic filter change
 */
function handleDemographicFilter(e) {
    // This would normally fetch filtered data based on the selection
    console.log('Demographic filter changed to:', e.target.value);
    
    // Simulate data update with variations
    updateAudienceMigrationChart(e.target.value);
}

/**
 * Handle content type filter change
 */
function handleContentTypeFilter(e) {
    console.log('Content type filter changed to:', e.target.value);
    updateAudienceMigrationChart(e.target.value);
}

/**
 * Handle time period filter change
 */
function handleTimePeriodFilter(e) {
    console.log('Time period filter changed to:', e.target.value);
    updateAudienceMigrationChart(e.target.value);
}

/**
 * Handle view type filter change
 */
function handleViewTypeFilter(e) {
    console.log('View type filter changed to:', e.target.value);
    
    // Switch between different chart types based on selection
    const viewType = e.target.value;
    const audienceMigrationChart = document.getElementById('audienceMigrationChart');
    const audienceFlowContainer = document.getElementById('audienceFlowContainer');
    
    if (viewType === 'migration') {
        // Show flow visualization instead of chart
        audienceMigrationChart.parentElement.classList.add('d-none');
        audienceFlowContainer.parentElement.classList.remove('d-none');
        
        // For demo purposes, we'd simulate loading the flow visualization
        setTimeout(() => {
            audienceFlowContainer.innerHTML = '<div class="text-center py-3">Migration flow visualization would be displayed here.</div>';
        }, 800);
        
    } else {
        // Show chart (trend or forecast)
        audienceMigrationChart.parentElement.classList.remove('d-none');
        audienceFlowContainer.parentElement.classList.add('d-none');
        
        updateAudienceMigrationChart(viewType);
    }
}

/**
 * Update audience migration chart with filtered data
 */
function updateAudienceMigrationChart(filterValue) {
    // Get base data
    const data = ChannelStrategyData.getData('audienceMigration');
    
    // Apply a variation based on the filter to simulate different data views
    const getVariation = (filterType) => {
        switch (filterType) {
            case '18-24':
                return 1.2; // Younger audience has stronger migration to digital
            case '55+':
                return 0.7; // Older audience has slower migration
            case 'live':
                return 1.1; // Live content has specific pattern
            case 'trend':
                return 1.0; // Base case
            case 'forecast':
                // Extend the data into the future
                return 1.05;
            default:
                return 1.0;
        }
    };
    
    const variation = getVariation(filterValue);
    
    // Apply the variation to create a new dataset
    const updatedData = {
        ...data,
        datasets: data.datasets.map(dataset => {
            // Apply different adjustments based on channel type
            let adjustmentFactor;
            if (dataset.label.includes('Broadcast') || dataset.label.includes('Cable')) {
                // Traditional media channels decline faster with certain demographics
                adjustmentFactor = 2 - variation;
            } else if (dataset.label.includes('Streaming') || dataset.label.includes('Mobile')) {
                // Digital channels grow faster with certain demographics
                adjustmentFactor = variation;
            } else {
                // Neutral adjustment for other channels
                adjustmentFactor = 1;
            }
            
            return {
                ...dataset,
                data: dataset.data.map(value => Math.round(value * adjustmentFactor))
            };
        })
    };
    
    // Special case for forecast view - extend data into future
    if (filterValue === 'forecast') {
        // Add future periods
        updatedData.labels = [...data.labels, 'Q3 2025', 'Q4 2025', 'Q1 2026'];
        
        // Extrapolate trends for each dataset
        updatedData.datasets = updatedData.datasets.map(dataset => {
            const lastValues = dataset.data.slice(-3); // Get last 3 values
            const avgChange = (lastValues[2] - lastValues[0]) / 2; // Average change per period
            
            // Extrapolate 3 more periods
            const forecast = [
                Math.round(dataset.data[dataset.data.length - 1] + avgChange),
                Math.round(dataset.data[dataset.data.length - 1] + avgChange * 2),
                Math.round(dataset.data[dataset.data.length - 1] + avgChange * 3)
            ];
            
            // Add forecast data with a different style for future periods
            return {
                ...dataset,
                data: [...dataset.data, ...forecast],
                segment: {
                    borderDash: ctx => ctx.p0.parsed.x >= data.labels.length - 1 ? [6, 6] : undefined
                }
            };
        });
    }
    
    // Update the chart
    ChannelStrategyCharts.updateChart('audienceMigration', updatedData);
}

/**
 * Handle data import
 */
function handleDataImport() {
    // Create a hidden file input
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    
    // Trigger the file dialog
    fileInput.click();
    
    // Handle file selection
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (!file) {
            document.body.removeChild(fileInput);
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                const success = ChannelStrategyData.importData(data);
                
                if (success) {
                    // Reload all charts and data displays
                    ChannelStrategyCharts.initCharts();
                    populateKPICards();
                    populateTopChannelsList();
                    
                    // Show success message
                    alert('Data imported successfully!');
                } else {
                    alert('Failed to import data. Invalid format.');
                }
            } catch (error) {
                console.error('Error importing data:', error);
                alert('Error importing data. Please check the file format.');
            }
            
            // Remove the file input
            document.body.removeChild(fileInput);
        };
        
        reader.readAsText(file);
    });
}

/**
 * Handle data export
 */
function handleDataExport() {
    // Get all data from the application
    const exportData = ChannelStrategyData.exportAllData();
    
    // Convert to JSON string
    const jsonData = JSON.stringify(exportData, null, 2);
    
    // Create a download link
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'channel-strategy-data.json';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    setTimeout(() => {
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    }, 100);
}

/**
 * Load user settings from localStorage
 */
function loadUserSettings() {
    const settings = ChannelStrategyData.getUserData('preferences');
    
    if (settings) {
        // Apply saved preferences
        console.log('Loaded user settings:', settings);
        
        // Example: Apply a saved demographic filter
        if (settings.demographicFilter) {
            const demographicSelect = document.getElementById('demographicFilter');
            if (demographicSelect) {
                demographicSelect.value = settings.demographicFilter;
                // Trigger the change event to apply the filter
                demographicSelect.dispatchEvent(new Event('change'));
            }
        }
    }
}