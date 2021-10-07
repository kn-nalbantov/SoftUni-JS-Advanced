function validate() {
  const submit = document.getElementById('submit');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPass = document.getElementById('confirm-password');
  const companyNum = document.getElementById('companyNumber');
  const isCompany = document.getElementById('company');
  const companyInfo = document.getElementById('companyInfo');
  const valid = document.getElementById('valid');

  isCompany.addEventListener('change', () => {
    if (isCompany.checked) {
      companyInfo.style.display = 'block';
    } else {
      companyInfo.style.display = 'none';
    }
  });

  submit.addEventListener('click', onClick);

  const userPattern = /^[A-Za-z0-9]{3,20}$/;
  const passPattern = /^\w{5,15}$/;
  function onClick(e) {
    e.preventDefault();
    let hasIncorrectFields = false;
    if (!userPattern.test(username.value)) {
      username.style.borderColor = 'red';
      hasIncorrectFields = true;
    } else {
      username.style.border = 'none';
    }
    if (!passPattern.test(password.value)) {
      password.style.borderColor = 'red';
      hasIncorrectFields = true;
    } else {
      password.style.border = 'none';
    }

    if (confirmPass.value !== password.value) {
      confirmPass.style.borderColor = 'red';
      password.style.borderColor = 'red';
      hasIncorrectFields = true;
    } else if(confirmPass.value === password.value && passPattern.test(password.value)) {
      password.style.border = 'none';
      confirmPass.style.border = 'none';
    }

    let atIndex = 0;
    if (email.value.includes('@')) {
      atIndex = email.value.indexOf('@');
    }
    if (
      email.value.includes('@') &&
      email.value.substring(atIndex).includes('.')
    ) {
      email.style.border = 'none';
    } else {
      email.style.borderColor = 'red';
      hasIncorrectFields = true;
    }

    if (isCompany.checked) {
      if (
        Number(companyNum.value) >= 1000 &&
        Number(companyNum.value) <= 9999
      ) {
        companyNum.style.border = 'none';
      } else {
        companyNum.style.borderColor = 'red';
        hasIncorrectFields = true;
      }
    }

    if (hasIncorrectFields) {
      valid.style.display = 'none';
    } else {
      valid.style.display = 'block';
    }
  }
}
