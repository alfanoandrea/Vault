// Esegui l'animazione quando la pagina è caricata
window.addEventListener('load', () => {
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, index * 200); // Ritardo per far sembrare l'animazione a "forza bruta"
    });
});
