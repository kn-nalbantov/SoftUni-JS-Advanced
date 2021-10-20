function solve() {
  const lectureName = document.querySelector('[name="lecture-name"]');
  const date = document.querySelector('[name="lecture-date"]');
  const select = document.querySelector('select');
  const addButton = document.querySelector('button');
  addButton.addEventListener('click', addLecture);
  const modules = document.querySelector('.modules');

  function addLecture(e) {
    e.preventDefault();

    if (
      !date.value == '' &&
      !lectureName.value == '' &&
      !select.selectedIndex == 0
    ) {

      let [dateFormat, timeFormat] = date.value.split('T');
      dateFormat = dateFormat.split('-').join('/');

      const li = document.createElement('li');
      li.setAttribute('class', 'flex');

      const h4 = document.createElement('h4');
      h4.textContent = `${lectureName.value} - ${dateFormat} - ${timeFormat}`;
      li.appendChild(h4);

      const button = document.createElement('button');
      button.textContent = 'Del';
      button.setAttribute('class', 'red');
      button.addEventListener('click', deleteLecture);
      li.appendChild(button);

      function deleteLecture(e) {
          if (e.target.parentNode.parentNode.children.length != 1) {
            e.target.parentNode.remove();
          } else {
            e.target.parentNode.parentNode.parentNode.remove();  
          }
      }

      let moduleExists = false;
      let existingModule;
      Array.from(modules.children).forEach((ch) => {
        if (ch.children[0].textContent == select.selectedOptions[0].value) {
          moduleExists = true;
          existingModule = ch;
        }
      });

      if (moduleExists) {
        existingModule.children[1].appendChild(li);
        let children = [];
        Array.from(existingModule.children[1].children).forEach(ch => {
            children.push(ch);
            ch.remove();
        });
        children.sort((a,b) => a.children[0].textContent.split(' - ')[1].localeCompare(b.children[0].textContent.split(' - ')[1]));
        children.forEach(ch => {
            existingModule.children[1].appendChild(ch);
        });
      } else {
        const div = document.createElement('div');
        div.setAttribute('class', 'module');
        modules.appendChild(div);

        const h3 = document.createElement('h3');
        h3.textContent = select.selectedOptions[0].value;
        div.appendChild(h3);

        const ul = document.createElement('ul');
        div.appendChild(ul);

        ul.appendChild(li);
      }
    }
  }
}
