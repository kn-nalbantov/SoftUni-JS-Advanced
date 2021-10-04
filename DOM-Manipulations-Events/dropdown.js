function addItem() {
    const text = document.querySelector('#newItemText');
    const value = document.querySelector('#newItemValue');
    const menu = document.querySelector('#menu');
  
    const option = document.createElement('option');
    option.textContent = text.value;
    option.setAttribute('value', value.value);
    menu.appendChild(option);
  
    value.value = '';
    text.value = '';
  }