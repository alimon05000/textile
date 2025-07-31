const quotes = [
    {
        text: "Кто уверует в Аллаха, того Он поведёт прямым путём",
        source: "Коран, 3:101"
    },
    {
        text: "Терпение — это свет",
        source: "Хадис (Муслим)"
    },
    {
        text: "Поистине, за трудностью следует облегчение",
        source: "Коран, 94:5"
    },
    {
        text: "Совершенствуй свой нрав, и ты будешь подобен тем, кто поклоняется ночами",
        source: "Хадис (Ат-Табарани)"
    },
    {
        text: "Аллах прекрасен и любит прекрасное",
        source: "Хадис (Муслим)"
    }
];

// Функция для сохранения текущей цитаты и времени
function saveQuoteToStorage(quoteIndex) {
    const quoteData = {
        index: quoteIndex,
        timestamp: new Date().getTime()
    };
    localStorage.setItem('quoteData', JSON.stringify(quoteData));
}

// Функция для загрузки цитаты из хранилища
function loadQuoteFromStorage() {
    const savedData = localStorage.getItem('quoteData');
    if (!savedData) return null;
    
    const quoteData = JSON.parse(savedData);
    const now = new Date().getTime();
    const twoHours = 2 * 60 * 60 * 1000;
    
    // Если прошло меньше 2 часов, возвращаем сохранённую цитату
    if (now - quoteData.timestamp < twoHours) {
        return quotes[quoteData.index];
    }
    return null;
}

function updateQuote() {
    const savedQuote = loadQuoteFromStorage();
    
    if (savedQuote) {
        // Используем сохранённую цитату
        document.getElementById("quote-text").textContent = `«${savedQuote.text}»`;
        document.getElementById("quote-source").textContent = savedQuote.source;
    } else {
        // Генерируем новую цитату
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        document.getElementById("quote-text").textContent = `«${quote.text}»`;
        document.getElementById("quote-source").textContent = quote.source;
        saveQuoteToStorage(randomIndex);
    }
}

// Инициализация
updateQuote();

// Проверяем каждые 30 минут, не прошло ли 2 часа
setInterval(updateQuote, 30 * 60 * 1000);

// PWA: Установка Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(err => console.log('ServiceWorker error:', err));
    });
}
