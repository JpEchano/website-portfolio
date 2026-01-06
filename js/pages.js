document.addEventListener('DOMContentLoaded', () => {
    const pageFiles = [
        { file: 'header.html', containerId: 'header-container' },
        { file: 'masthead.html', containerId: 'masthead-container' },
        { file: 'portfolio.html', containerId: 'portfolio-container' },
        { file: 'about.html', containerId: 'about-container' },
        { file: 'contact.html', containerId: 'contact-container' },
        { file: 'footer.html', containerId: 'footer-container' }
    ];

    pageFiles.forEach(({ file, containerId }) => {
        fetch(`page/${file}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load page section: ${file}`);
                }
                return response.text();
            })
            .then(html => {
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = html;
                }
            })
            .catch(error => {
                console.error('Error loading page section:', error);
            });
    });
});
