// API de tareas
const getTodos = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) throw new Error('Error al obtener los datos');

        const data = await response.json();
        const cardsParent = document.getElementById('cards');
        console.log(data);

        const limitedData = data.slice(0, 30);

        limitedData.forEach(todo => {
            const card = document.createElement('div');
            card.className = 'todo-card';
            
            const statusClass = todo.completed ? 'completed' : 'pending';
            const statusText = todo.completed ? 'Completado' : 'Pendiente';
            
            card.innerHTML = `
                <div class="card-header">
                    <h2>${todo.title}</h2>
                    <span class="status-badge ${statusClass}">${statusText}</span>
                </div>
                <div class="card-content">
                    <p>Usuario ID: ${todo.userId}</p>
                    <span class="task-id">Task #${todo.id}</span>
                </div>
            `;

            cardsParent.appendChild(card);
        });

    } catch (error) {
        console.error("Error:", error.message);
        const cardsParent = document.getElementById('cards');
        cardsParent.innerHTML = `
            <div class="col-span-3 text-center p-8" style="color: var(--accent-red);">
                <p class="text-xl">Error al cargar los datos: ${error.message}</p>
                <p class="mt-4">Por favor, intenta nuevamente más tarde.</p>
            </div>
        `;
    }
};

getTodos();