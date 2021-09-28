function lockedProfile() {
    [...document.querySelectorAll('button')].forEach(btn => {
        btn.addEventListener('click', showMore);
    })

    function showMore(e) {
        if (!e.target.parentNode.children[2].checked) {
            e.target.parentNode.children[9].style.display = 'block';
            e.target.textContent = 'Hide it';
            e.target.removeEventListener('click', showMore);
            e.target.addEventListener('click', hideIt);
        }
    }

    function hideIt(e) {
        if (!e.target.parentNode.children[2].checked) {
            e.target.parentNode.children[9].style.display = 'none';
            e.target.textContent = 'Show more';
            e.target.removeEventListener('click', hideIt);
            e.target.addEventListener('click', showMore);
        }
    }

}