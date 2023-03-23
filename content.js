const getCookieValue = (name) =>
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';

const parseString = (string) => {
  JSON.parse(decodeURIComponent(string));
};

const getTheme = () => {
  const colourMode = JSON.parse(
    decodeURIComponent(getCookieValue('color_mode'))
  );

  const lightTheme = colourMode.light_theme.name;
  const darkTheme = colourMode.dark_theme.name;

  const result = window.matchMedia('(prefers-color-scheme: dark)');

  if (result.matches) {
    return darkTheme;
  } else {
    return lightTheme;
  }
};

(async () => {
  const themeKeyword = getTheme().includes('dark')
    ? 'dark-theme'
    : 'light-theme';

  const graph = document.querySelector('.js-calendar-graph');

  chrome.storage.local.get(['theme']).then((result) => {
    const baseTheme = themeKeyword;

    graph.classList.add(baseTheme);

    if (result.theme === 'off') {
      graph.classList.remove(baseTheme);

      return;
    }

    switch (result.theme) {
      case 'green':
        return graph.classList.add('theme-green');
      case 'blue':
        return graph.classList.add('theme-blue');
      case 'purple':
        return graph.classList.add('theme-purple');
      case 'orange':
        return graph.classList.add('theme-orange');
    }
  });
})();
