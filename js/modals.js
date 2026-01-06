document.addEventListener('DOMContentLoaded', () => {
    const modalFiles = [
        'cabin.html',
        'cake.html',
        'circus.html',
        'game.html',
        'safe.html',
        'submarine.html'
    ];

    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    document.body.appendChild(modalContainer);

    modalFiles.forEach(file => {
        fetch(`modals/${file}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load modal: ${file}`);
                }
                return response.text();
            })
            .then(html => {
                modalContainer.insertAdjacentHTML('beforeend', html);
            })
            .catch(error => {
                console.error('Error loading modal:', error);
            });
    });
});
