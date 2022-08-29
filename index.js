function clickHandler() {

  // get DOM elements
  const input = document.getElementById('input');
  const error = document.getElementById('error-prompt');
  const icon = document.getElementById('card-error-icon');

  // validate email
  const valid = validator.isEmail(input.value);  
  if (input === '' || !valid) {
    error.style.display = 'block';
    icon.style.display = 'inline'
    return;
  }
  else {
    error.style.display = 'none';
    icon.style.display = 'none'
  }
}