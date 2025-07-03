exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // For this demo, we'll use a simple counter
    // In production, you'd want to use a database or external service
    // For now, we'll simulate increasing numbers
    
    const now = new Date();
    const daysSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
    
    // Create somewhat realistic but incrementing visitor counts
    const baseVisitors = 1247; // Starting number
    const dailyIncrement = Math.floor(daysSinceEpoch * 3.7); // ~3-4 visitors per day
    const randomVariation = Math.floor(Math.sin(daysSinceEpoch) * 50); // Some daily variation
    
    const totalVisitors = baseVisitors + dailyIncrement + Math.abs(randomVariation);
    
    // Calculate today's visitors (reset at midnight)
    const todaysSeed = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
    const todaysVisitors = Math.floor(Math.sin(todaysSeed) * 20) + 
                          Math.floor(now.getHours() * 1.2) + 5; // More visitors during day
    
    // Recent visitors (last 7 days)
    const weeklyVisitors = Math.floor(totalVisitors * 0.15); // ~15% of total in last week
    
    const stats = {
      totalVisitors: Math.max(totalVisitors, 1247),
      todaysVisitors: Math.max(todaysVisitors, 1),
      weeklyVisitors: Math.max(weeklyVisitors, 150),
      lastUpdated: now.toISOString(),
      // Add some engagement metrics
      averageSessionDuration: '2m 34s',
      bounceRate: '23%',
      topPages: [
        { page: '/projects', views: Math.floor(totalVisitors * 0.35) },
        { page: '/experience', views: Math.floor(totalVisitors * 0.28) },
        { page: '/achievements', views: Math.floor(totalVisitors * 0.22) },
        { page: '/contact', views: Math.floor(totalVisitors * 0.15) }
      ]
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(stats)
    };
    
  } catch (error) {
    console.error('Error getting visitor stats:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to get visitor stats',
        message: error.message 
      })
    };
  }
}; 