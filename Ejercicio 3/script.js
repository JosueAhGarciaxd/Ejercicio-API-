// API de Gatos
const getCatFact = async () => {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) throw new Error('Error al obtener los datos');

        const data = await response.json();
        const cardsParent = document.getElementById('cards');
        
        const card = document.createElement('div');
        card.className = 'cat-card fade-in';
        
        card.innerHTML = `
            <div class="card-header">
                <span class="cat-icon">🐱</span>
                <h2>Curiosidad Felina</h2>
            </div>
            <div class="card-content">
                <p>${data.fact}</p>
                <div class="paw-print">🐾</div>
            </div>
        `;

        cardsParent.insertBefore(card, cardsParent.firstChild);

    } catch (error) {
        console.error("Error:", error.message);
        const cardsParent = document.getElementById('cards');
        const errorCard = document.createElement('div');
        errorCard.className = 'cat-card fade-in';
        errorCard.innerHTML = `
            <div class="card-header">
                <span class="cat-icon">⚠️</span>
                <h2>Error</h2>
            </div>
            <div class="card-content">
                <p>No pudimos obtener un nuevo dato curioso: ${error.message}</p>
                <p>Por favor, intenta nuevamente más tarde.</p>
            </div>
        `;
        cardsParent.insertBefore(errorCard, cardsParent.firstChild);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const newFactButton = document.getElementById('new-fact');
    if (newFactButton) {
        newFactButton.addEventListener('click', getCatFact);
    }
    getCatFact();
});