function solution() {
    const input = document.querySelector('.card div input');
    const [_unused, listGifts, sentGifts, discardedGifts] = document.querySelectorAll('section');
    const addButton = document.querySelector('button');

    addButton.addEventListener('click', addGift);

    function addGift() {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.setAttribute('class', 'gift');
        const sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.setAttribute('id', 'sendButton');
        sendButton.addEventListener('click', sendGift);
        const discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.setAttribute('id', 'discardButton');
        discardButton.addEventListener('click', discardGift);

        li.appendChild(sendButton);
        li.appendChild(discardButton);

        function sendGift(e) {
            const duplicateLi = document.createElement('li');
            duplicateLi.textContent = e.target.parentNode.textContent.split('Send')[0];
            duplicateLi.setAttribute('class', 'gift');
            sentGifts.children[1].appendChild(duplicateLi);
            e.target.parentNode.remove();
        }

        function discardGift(e) {
            const duplicateLi = document.createElement('li');
            duplicateLi.textContent = e.target.parentNode.textContent.split('Send')[0];
            duplicateLi.setAttribute('class', 'gift');
            discardedGifts.children[1].appendChild(duplicateLi);
            e.target.parentNode.remove();
        }
        
        
        listGifts.children[1].appendChild(li);

        let sorted = [];
        for (let el of Array.from(listGifts.children[1].children)) {
            sorted.push(el);
            el.remove();
            // console.log(el.textContent.split('Send')[0]);
        }
        sorted.sort((a,b) => a.textContent.split('Send')[0].localeCompare(b.textContent.split('Send')[0]));
        sorted.forEach(el => {
            listGifts.children[1].appendChild(el);
        });

        input.value = '';
    }
}