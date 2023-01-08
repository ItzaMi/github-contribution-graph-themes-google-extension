const button = document.getElementById('red-button');
const githubUrl = 'https://github.com/';

button.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  await chrome.scripting.insertCSS({
    files: ['colours.css'],
    target: { tabId: tab.id },
  });

  chrome.storage.local.set({ channels: 'yes' });

  chrome.storage.local.get(['channels'], (result) => {
    console.log('Value currently is ' + result.channels);
  });
});
