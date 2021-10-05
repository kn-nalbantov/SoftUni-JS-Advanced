function validate() {
    const input = document.querySelector('#email');

    input.addEventListener('change', onChange);

    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    function onChange() {
        if (!pattern.test(input.value)) {
            input.setAttribute('class', 'error');
        } else {
            input.removeAttribute('class', 'error');
        }
    }
}