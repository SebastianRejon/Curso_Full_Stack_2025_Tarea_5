const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;

    darkModeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-bs-theme');
      if (currentTheme === 'light') {
        html.setAttribute('data-bs-theme', 'dark');
        darkModeToggle.textContent = 'Cambiar a Claro'; // O cambia el icono
      } else {
        html.setAttribute('data-bs-theme', 'light');
        darkModeToggle.textContent = 'Cambiar a Oscuro';
      }
    });
