// API de No se
const getCatFact = async () => {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) throw new Error('Error al obtener los datos');

        const data = await response.json();
        const cardsParent = document.getElementById('cards');
        console.log(data);

        const card = document.createElement('div');
        card.innerHTML = `
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <div class="p-4">
                    <h2 class="text-xl font-bold mb-2">...</h2>
                    <p class="text-gray-700">${data.fact}</p>
                </div>
            </div>  
        `;

        cardsParent.appendChild(card);

    } catch (error) {
        console.error("Error:", error.message);
    }
};

const getCatFact2 = () => {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};

getCatFact();
getCatFact2();
