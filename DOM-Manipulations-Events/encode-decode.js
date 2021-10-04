function encodeAndDecodeMessages() {
    const [encodeBtn, decodeBtn] = document.querySelectorAll('#main button');
    const [encodeText, decodeText] = document.querySelectorAll('#main textarea');
  
    encodeBtn.addEventListener('click', encodeMsg);
    decodeBtn.addEventListener('click', decodeMsg);
  
    function encodeMsg() {
      const msg = encodeText.value
        .split('')
        .map(x => String.fromCharCode(x.charCodeAt() + 1))
        .join('');
      decodeText.textContent = msg;
      encodeText.value = '';
    }
  
    function decodeMsg() {
      const msg = decodeText.value
        .split('')
        .map(x => String.fromCharCode(x.charCodeAt() - 1))
        .join('');
      decodeText.textContent = msg;
    }
  }
  