const getCookieValue = (name) =>
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';

const parseString = (string) => {
  JSON.parse(decodeURIComponent(string));
};

(async () => {
  const element = document.querySelector('.UnderlineNav-body');

  const div = document.createElement('div');
  const text = document.createTextNode('Hello World!');
  div.appendChild(text);

  element.appendChild(div);

  const preferredColourMode = getCookieValue('preferred_color_mode');
  const colourMode = JSON.parse(
    decodeURIComponent(getCookieValue('color_mode'))
  );

  const lightTheme = colourMode.light_theme.name;
  const darkTheme = colourMode.dark_theme.name;

  const result = window.matchMedia('(prefers-color-scheme: dark)');
  console.log(preferredColourMode);
  console.log(colourMode);
  console.log(lightTheme);
  console.log(darkTheme);
})();
