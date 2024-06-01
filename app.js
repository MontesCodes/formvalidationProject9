const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const username = document.querySelector("[name='username']").value.trim();
  const email = document.querySelector("[name='email']").value.trim();
  const password = document.querySelector("[name='password']").value.trim();
  const confirmPassword = document
    .querySelector("[name='confirm-password']")
    .value.trim();

  const errors = [];

  if (username === '') errors.push('User Name field cannot be empty');
  if (email === '') errors.push('Email field cannot be empty');
  if (password === '') errors.push('Password field cannot be empty');
  if (password !== confirmPassword) errors.push('Passwords do not match');
});
