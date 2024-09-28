async function fetchRSS() {
    const url = 'https://news.google.com/rss/search?q=hacking&hl=it&gl=IT&ceid=IT:it';
    try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        const items = xmlDoc.getElementsByTagName('item');
        let newsHTML = '';
        for (let i = 0; i <  Math.min(items.length, 7); i++) {
            const title = items[i].getElementsByTagName('title')[0].textContent;
            const link = items[i].getElementsByTagName('link')[0].textContent;
            const pubDate = items[i].getElementsByTagName('pubDate')[0].textContent;

            newsHTML += `
            <li class="news-item">
                <a href="${link}" target="_blank">
                    <h4>${title}</h4>
                    <p class="pub-date">Pubblicato il: ${new Date(pubDate).toLocaleDateString()}</p>
                </a>
            </li>
            `;
        }

        document.querySelector('.news-list').innerHTML = newsHTML;
    } catch (error) {
        console.error('Errore nel recupero delle notizie:', error);
    }
}

fetchRSS();