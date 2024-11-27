const username = localStorage.getItem('loggedInUser');
const welcomeMessage = document.getElementById('welcome-message');
welcomeMessage.textContent = `Welcome, ${username}!`;
const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
});

if (!username) {
    window.location.href = 'index.html';
}
