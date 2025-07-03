const fetch = require('node-fetch');

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
    const username = 'charliecarpenter15'; // Your GitHub username
    
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userResponse.json();
    
    // Fetch repositories
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const reposData = await reposResponse.json();
    
    // Calculate stats
    const publicRepos = reposData.length;
    const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = reposData.reduce((sum, repo) => sum + repo.forks_count, 0);
    const languages = {};
    
    // Get language breakdown
    for (const repo of reposData.slice(0, 10)) { // Limit to top 10 repos to avoid rate limits
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    }
    
    // Get top languages
    const topLanguages = Object.entries(languages)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([lang, count]) => ({ name: lang, count }));
    
    // Get recent activity (last 5 repos updated)
    const recentRepos = reposData
      .filter(repo => !repo.fork) // Exclude forks
      .slice(0, 5)
      .map(repo => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        updated: repo.updated_at
      }));

    const stats = {
      username: userData.login,
      name: userData.name,
      avatar: userData.avatar_url,
      bio: userData.bio,
      location: userData.location,
      followers: userData.followers,
      following: userData.following,
      publicRepos,
      totalStars,
      totalForks,
      topLanguages,
      recentRepos,
      profileUrl: userData.html_url,
      lastUpdated: new Date().toISOString()
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(stats)
    };
    
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to fetch GitHub stats',
        message: error.message 
      })
    };
  }
}; 