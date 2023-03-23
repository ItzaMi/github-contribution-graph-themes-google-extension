const greenButton = document.getElementById('green-button');
const orangeButton = document.getElementById('orange-button');
const blueButton = document.getElementById('blue-button');
const purpleButton = document.getElementById('purple-button');

const offButton = document.getElementById('off-button');

const githubUrl = 'github.com';

const reload = () => {
  chrome.tabs.query({ url: `*://${githubUrl}/*` }, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.reload(tab.id);
    });
  });
};

offButton.addEventListener('click', () => {
  chrome.storage.local.set({ theme: 'off' });

  reload();
});

greenButton.addEventListener('click', () => {
  chrome.storage.local.set({ theme: 'green' });

  reload();
});

orangeButton.addEventListener('click', () => {
  chrome.storage.local.set({ theme: 'orange' });

  reload();
});

blueButton.addEventListener('click', () => {
  chrome.storage.local.set({ theme: 'blue' });

  reload();
});

purpleButton.addEventListener('click', () => {
  chrome.storage.local.set({ theme: 'purple' });

  reload();
});
