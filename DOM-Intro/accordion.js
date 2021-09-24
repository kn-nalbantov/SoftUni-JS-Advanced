function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    const extraText = document.getElementById('extra');
    let isHidden;
    if (extraText.style.display == 'none') {
        isHidden = true;
    } else {
        isHidden = false;
    }

    if (isHidden) {
        btn.textContent = 'Less';
        extraText.style.display = 'block';
    } else {
        btn.textContent = 'More';
        extraText.style.display = 'none';
    }
}