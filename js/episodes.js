// ===== EPISODE DATA =====
// Edit this array to add your episodes
const episodes = [
  {
    id: 1,
    series: "Season 1",
    title: "Episode 1 - The Beginning",
    description: "Join us as we begin an epic journey through a world of wonder and mystery.",
    videoUrl: "videos/episode-1.mp4",
    thumbnail: "images/ep1-thumb.jpg",
    duration: "12:34",
    date: "2024-01-15",
    facebookUrl: "https://www.facebook.com/DesoilRedeDraygo",
    twitterUrl: "https://twitter.com/DesoilRedeDraygo"
  },
  {
    id: 2,
    series: "Season 1",
    title: "Episode 2 - The Quest Begins",
    description: "Our heroes embark on their greatest adventure yet, filled with danger and discovery.",
    videoUrl: "videos/episode-2.mp4",
    thumbnail: "images/ep2-thumb.jpg",
    duration: "14:20",
    date: "2024-01-22",
    facebookUrl: "https://www.facebook.com/DesoilRedeDraygo",
    twitterUrl: "https://twitter.com/DesoilRedeDraygo"
  },
  {
    id: 3,
    series: "Season 1",
    title: "Episode 3 - Shadows of Doubt",
    description: "Trust is tested as new threats emerge from the darkness.",
    videoUrl: "videos/episode-3.mp4",
    thumbnail: "images/ep3-thumb.jpg",
    duration: "13:45",
    date: "2024-01-29",
    facebookUrl: "https://www.facebook.com/DesoilRedeDraygo",
    twitterUrl: "https://twitter.com/DesoilRedeDraygo"
  },
  {
    id: 4,
    series: "Season 2",
    title: "Episode 4 - New Horizons",
    description: "A fresh perspective opens doors to untold possibilities.",
    videoUrl: "videos/episode-4.mp4",
    thumbnail: "images/ep4-thumb.jpg",
    duration: "15:10",
    date: "2024-02-05",
    facebookUrl: "https://www.facebook.com/DesoilRedeDraygo",
    twitterUrl: "https://twitter.com/DesoilRedeDraygo"
  },
  {
    id: 5,
    series: "Season 2",
    title: "Episode 5 - Allies and Enemies",
    description: "Old alliances crumble while unexpected friendships bloom.",
    videoUrl: "videos/episode-5.mp4",
    thumbnail: "images/ep5-thumb.jpg",
    duration: "14:30",
    date: "2024-02-12",
    facebookUrl: "https://www.facebook.com/DesoilRedeDraygo",
    twitterUrl: "https://twitter.com/DesoilRedeDraygo"
  }
];

// ===== GET UNIQUE SERIES ===== 
function getUniqueSeries() {
  return [...new Set(episodes.map(ep => ep.series))].sort();
}

// ===== INITIALIZE SERIES NAVIGATION =====
function initSeriesNav() {
  const seriesNav = document.getElementById('series-nav');
  const series = getUniqueSeries();

  // Add "All" button
  const allBtn = document.createElement('button');
  allBtn.textContent = 'All Episodes';
  allBtn.classList.add('active');
  allBtn.addEventListener('click', () => {
    filterBySeriesAndSearch('all');
    updateActiveButton(allBtn);
  });
  seriesNav.appendChild(allBtn);

  // Add series buttons
  series.forEach(s => {
    const btn = document.createElement('button');
    btn.textContent = s;
    btn.addEventListener('click', () => {
      filterBySeriesAndSearch(s);
      updateActiveButton(btn);
    });
    seriesNav.appendChild(btn);
  });
}

// ===== UPDATE ACTIVE BUTTON STATE =====
function updateActiveButton(activeBtn) {
  const buttons = document.querySelectorAll('.series-nav button');
  buttons.forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

// ===== FILTER EPISODES =====
let currentFilter = 'all';

function filterBySeriesAndSearch(series) {
  currentFilter = series;
  applyFilters();
}

function applyFilters() {
  const searchTerm = document.getElementById('search-box').value.toLowerCase();
  
  const filtered = episodes.filter(ep => {
    const matchesSeries = currentFilter === 'all' || ep.series === currentFilter;
    const matchesSearch = ep.title.toLowerCase().includes(searchTerm) ||
                          ep.description.toLowerCase().includes(searchTerm);
    return matchesSeries && matchesSearch;
  });

  renderEpisodes(filtered);
  
  // Show/hide no results message
  const noResults = document.getElementById('no-results');
  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
  }
}

// ===== RENDER EPISODE CARDS =====
function renderEpisodes(episodesToRender) {
  const grid = document.getElementById('episode-grid');
  grid.innerHTML = '';

  episodesToRender.forEach(ep => {
    const card = document.createElement('div');
    card.classList.add('episode-card');
    card.innerHTML = `
      <div class="episode-thumbnail" onclick="openVideoModal(${ep.id})">
        ${ep.thumbnail ? `<img src="${ep.thumbnail}" alt="${ep.title}">` : ''}
        <div class="episode-play-icon">▶</div>
      </div>
      <div class="episode-info">
        <div class="episode-series">${ep.series}</div>
        <h3 class="episode-title">${ep.title}</h3>
        <p class="episode-description">${ep.description}</p>
        <div class="episode-meta">
          <span>${ep.duration}</span>
          <span>${new Date(ep.date).toLocaleDateString()}</span>
        </div>
        <div class="episode-actions">
          <button class="btn-watch" onclick="openVideoModal(${ep.id})">Watch</button>
          <button class="btn-share" onclick="toggleShareMenu(${ep.id})">Share</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== SEARCH FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', () => {
  const searchBox = document.getElementById('search-box');
  searchBox.addEventListener('input', () => {
    applyFilters();
  });

  // Initialize on page load
  initSeriesNav();
  renderEpisodes(episodes);
  
  // Set footer year
  document.getElementById('footer-year').textContent = new Date().getFullYear();
});

// ===== EXPORT FOR USE IN GALLERY.JS =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { episodes, getUniqueSeries };
}
