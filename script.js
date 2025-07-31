const quotes = [
    {
        text: "Кто уверует в Аллаха, того Он поведёт прямым путём.",
        source: "Коран, 3:101"
    },
    {
        text: "Терпение — это свет.",
        source: "Хадис (Муслим)"
    },
    {
        text: "Поистине, за трудностью следует облегчение.",
        source: "Коран, 94:5"
    },
    {
        text: "Совершенствуй свой нрав, и ты будешь подобен тем, кто поклоняется ночами.",
        source: "Хадис (Ат-Табарани)"
    },
    {
        text: "Аллах прекрасен и любит прекрасное.",
        source: "Хадис (Муслим)"
    }
];

function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = `«${quote.text}»`;
    document.getElementById("quote-source").textContent = quote.source;
}

// Обновляем цитату при загрузке и каждые 3 часа
updateQuote();
setInterval(updateQuote, 3 * 60 * 60 * 1000);

// PWA: Установка Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(err => console.log('ServiceWorker error:', err));
    });
}
