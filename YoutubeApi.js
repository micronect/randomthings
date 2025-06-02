import { fetchYouTubeStats } from './youtubeApi.js';

window.addEventListener('load', () => {
    fetchYouTubeStats();
    setInterval(fetchYouTubeStats, 60000);

    setTimeout(() => {
        fadeInElement(document.querySelector('.hero p'), 200);
        fadeInElement(document.querySelector('.subscribe-btn'), 400);
    }, 1500);

    observeElements();
    document.querySelectorAll('.stat-card').forEach((card, index) => {
        fadeInElement(card, index * 200);
    });
});
