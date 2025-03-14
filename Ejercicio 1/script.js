// API perros xd
const getDogBreeds = async () => {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        if (!response.ok) throw new Error('Error al obtener los datos');

        const data = await response.json();
        const cardsParent = document.getElementById('cards');
        console.log(data);

        data.data.forEach(breed => {
            const card = document.createElement('div');
            card.className = 'card';
            const attributes = breed.attributes;
            
            card.innerHTML = `
                <div class="card-header">
                    <h2 class="text-xl font-bold">${attributes.name}</h2>
                </div>
                <div class="card-content">
                    <p class="text-gray-700 mb-4">${attributes.description || 'No hay descripción disponible para esta raza.'}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-sm font-medium text-indigo-600">Origen: ${attributes.origin || 'Desconocido'}</span>
                        <span class="text-sm font-medium text-orange-500">Viven de: ${attributes.life.min || '?'}-${attributes.life.max || '?'} años</span>
                    </div>
                </div>
                <div class="paw-print">🐾</div>
            `;

            cardsParent.appendChild(card);
        });

    } catch (error) {
        console.error("Error:", error.message);
        const cardsParent = document.getElementById('cards');
        cardsParent.innerHTML = `
            <div class="col-span-3 text-center p-8">
                <p class="text-xl text-red-500">Error al cargar los datos: ${error.message}</p>
                <p class="mt-4">Por favor, intenta nuevamente más tarde.</p>
            </div>
        `;
    }
};

const getDogBreeds2 = () => {
    fetch('https://dogapi.dog/api/v2/breeds')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};

getDogBreeds();
// getDogBreeds2();


