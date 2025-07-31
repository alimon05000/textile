// База цитат (можно расширить)
const quotes = [
    {
        text: "Аллах не возлагает на человека сверх его возможностей.",
        source: "Коран, 2:286"
    },
    {
        text: "Совершай молитву, ибо она удерживает от мерзкого и предосудительного.",
        source: "Коран, 29:45"
    },
    {
        text: "Кто уверует в Аллаха и в Последний день, пусть говорит благое или молчит.",
        source: "Хадис (Бухари, Муслим)"
    },
    {
        text: "Поистине, Аллах любит, когда кто-либо из вас выполняет работу, он выполняет её наилучшим образом.",
        source: "Хадис (Байхаки)"
    },
    {
        text: "Терпение — это свет.",
        source: "Хадис (Муслим)"
    }
];

// Обновление цитаты
function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = quote.text;
    document.getElementById("quote-source").textContent = quote.source;
}

// Первая загрузка + обновление каждые 3 часа
updateQuote();
setInterval(updateQuote, 3 * 60 * 60 * 1000); 

// PWA: Установка
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => console.log('SW registered'))
            .catch(err => console.log('SW registration failed: ', err));
    });
}
