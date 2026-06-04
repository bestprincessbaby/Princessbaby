// ===== VIDEO MODAL / PLAYER =====

// Open video modal
function openVideoModal(episodeId) {
  const episode = episodes.find(ep => ep.id === episodeId);
  if (!episode) return;

  const modal = document.getElementById('video-modal') || createModal();
  const videoContainer = modal.querySelector('.video-container');
  const modalInfo = modal.querySelector('.modal-info');

  // Set video
  videoContainer.innerHTML = `<video controls></video>`;
  const video = videoContainer.querySelector('video');
  video.src = episode.videoUrl;

  // Set info
  modalInfo.innerHTML = `
    <h2 class="modal-title">${episode.title}</h2>
    <p class="episode-series">${episode.series}</p>
    <p class="modal-description">${episode.description}</p>
    
    <div class="share-buttons">
      <a href="${episode.facebookUrl}" target="_blank" rel="noopener" class="share-btn share-facebook">
        📘 Facebook
      </a>
      <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(episode.title)}" target="_blank" rel="noopener" class="share-btn share-twitter">
        𝕏 Twitter
      </a>
      <button class="share-btn share-copy" onclick="copyToClipboard('${episode.title}')">
        📋 Copy Link
      </button>
    </div>
  `;

  // Update Open Graph meta tags
  updateOpenGraphTags(episode);

  modal.classList.add('active');
  modal.scrollTop = 0;
}

// Create modal if it doesn't exist
function createModal() {
  const modal = document.createElement('div');
  modal.id = 'video-modal';
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="closeVideoModal()">✕</button>
      <div class="video-container"></div>
      <div class="modal-info"></div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVideoModal();
  });
  return modal;
}

// Close video modal
function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  if (modal) {
    modal.classList.remove('active');
    const video = modal.querySelector('video');
    if (video) video.pause();
  }
}

// Toggle share menu (for future enhancement)
function toggleShareMenu(episodeId) {
  const episode = episodes.find(ep => ep.id === episodeId);
  if (episode) {
    openVideoModal(episodeId);
  }
}

// ===== SHARE TO CLIPBOARD =====
function copyToClipboard(text) {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('Episode link copied to clipboard!');
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = url;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Episode link copied to clipboard!');
  });
}

// ===== UPDATE OPEN GRAPH META TAGS =====
function updateOpenGraphTags(episode) {
  // Update title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', episode.title);

  // Update description
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', episode.description);

  // Update image
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && episode.thumbnail) ogImage.setAttribute('content', episode.thumbnail);

  // Update URL
  const ogUrl = document.getElementById('og-url');
  if (ogUrl) {
    ogUrl.setAttribute('content', `${window.location.href}?episode=${episode.id}`);
  }

  // Update page title
  document.title = `${episode.title} — Deosil Rede Draygo`;
}

// ===== CLOSE MODAL ON ESC KEY =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVideoModal();
  }
});

// ===== INITIALIZE MODAL ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
  createModal();

  // Check if there's an episode ID in the URL
  const params = new URLSearchParams(window.location.search);
  const episodeId = params.get('episode');
  if (episodeId) {
    openVideoModal(parseInt(episodeId));
  }
});
