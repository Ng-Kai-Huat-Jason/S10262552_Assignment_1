const logcontainer = document.getElementById('logcontainer');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    console.log('Register button clicked');
    logcontainer.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    console.log('Login button clicked');
    logcontainer.classList.remove("active");
});