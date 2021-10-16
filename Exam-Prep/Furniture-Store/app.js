window.addEventListener('load', solve);

function solve() {
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const description = document.getElementById('description');
  const price = document.getElementById('price');
  const addButton = document.getElementById('add');
  const tbody = document.querySelector('tbody');
  const totalPrice = document.querySelector('.total-price');

  addButton.addEventListener('click', addFurniture);

  function addFurniture(e) {
    e.preventDefault();

    const yearValue = Number(year.value);
    const priceValue = Number(price.value);

    if (
      model.value != '' &&
      description.value != '' &&
      yearValue > 0 &&
      priceValue > 0
    ) {
      const info = document.createElement('tr');
      info.setAttribute('class', 'info');

      const infoItem = document.createElement('td');
      infoItem.textContent = model.value;
      info.appendChild(infoItem);

      const infoPrice = document.createElement('td');
      infoPrice.textContent = priceValue.toFixed(2);
      info.appendChild(infoPrice);

      const infoActions = document.createElement('td');
      const moreBtn = document.createElement('button');
      moreBtn.setAttribute('class', 'moreBtn');
      moreBtn.textContent = 'More Info';
      moreBtn.addEventListener('click', showMore);
      const buyBtn = document.createElement('button');
      buyBtn.setAttribute('class', 'buyBtn');
      buyBtn.textContent = 'Buy it';
      buyBtn.addEventListener('click', buyItem);

      infoActions.appendChild(moreBtn);
      infoActions.appendChild(buyBtn);
      info.appendChild(infoActions);

      const hide = document.createElement('tr');
      hide.setAttribute('class', 'hide');
      hide.style.display = 'none';

      const hideYear = document.createElement('td');
      hideYear.textContent = `Year: ${year.value}`;
      hide.appendChild(hideYear);

      const hideDescription = document.createElement('td');
      hideDescription.setAttribute('colspan', '3');
      hideDescription.textContent = `Description: ${description.value}`;
      hide.appendChild(hideDescription);

      tbody.appendChild(info);
      tbody.appendChild(hide);

      let isShowingMore = false;
      function showMore() {
        if (!isShowingMore) {
          moreBtn.textContent = 'Less Info';
          hide.style.display = 'contents';
          isShowingMore = true;
        } else {
          moreBtn.textContent = 'More Info';
          hide.style.display = 'none';
          isShowingMore = false;
        }
      }

      function buyItem() {
        totalPrice.textContent = (
          Number(totalPrice.textContent) + Number(infoPrice.textContent)
        ).toFixed(2);
        info.remove();
        hide.remove();
      }
    }

    model.value = '';
    price.value = '';
    year.value = '';
    description.value = '';
  }
}