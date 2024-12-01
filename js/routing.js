function loadContent(path) {
    const contentDiv = document.getElementById('content');
    const routes = {
        '/': `${basePath}sites/home/home.html`,
        '/szarvasgomba': `${basePath}sites/szarvasgomba/szarvasgomba.html`,
    };

    const htmlFile = routes[path];

    if (htmlFile) {
        fetch(htmlFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Page not found');
                }
                return response.text();
            })
            .then(html => {
                contentDiv.innerHTML = html; // Inject the HTML content into the page
                window.scrollTo(0, 0);  // Scroll to top after loading content
            })
            .catch(error => {
                contentDiv.innerHTML = `<h1>404 Not Found</h1><p>${error.message}</p>`;
            });
    } else {
        contentDiv.innerHTML = '<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>';
    }
}

page('/', () => loadContent('/'));
page('/szarvasgomba', () => loadContent('/szarvasgomba'));

page();

document.addEventListener('DOMContentLoaded', () => {
    loadContent(window.location.pathname);
});
