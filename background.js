const githubUrl = 'https://github.com/';

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(githubUrl)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'

    const element = document.querySelector('.UnderlineNav-body');

    // create a div with a text node inside
    const div = document.createElement('div');
    const text = document.createTextNode('Hello World!');
    div.appendChild(text);

    element.appendChild(div);

    console.log(element);
  }
});
