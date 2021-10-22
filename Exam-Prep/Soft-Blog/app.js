function solve() {
  const [author, title, category] = document.querySelectorAll('input');
  const content = document.querySelector('textarea');
  const createButton = document.querySelector('button');
  const output = document.querySelector('main section');
  const archiveSection = document.querySelector('.archive-section ol');

  createButton.addEventListener('click', createPost);

  function createPost(e) {
    e.preventDefault();

    const article = document.createElement('article');

    const h1 = document.createElement('h1');
    h1.textContent = title.value;

    const pCategory = document.createElement('p');
    pCategory.textContent = 'Category:';

    const pCategoryStrong = document.createElement('strong');
    pCategoryStrong.textContent = category.value;
    pCategory.appendChild(pCategoryStrong);

    const pAuthor = document.createElement('p');
    pAuthor.textContent = 'Creator:';
    const pAuthorStrong = document.createElement('strong');
    pAuthorStrong.textContent = author.value;
    pAuthor.appendChild(pAuthorStrong);

    const pContent = document.createElement('p');
    pContent.textContent = content.value; //textContent?
    
    const div = document.createElement('div');
    div.setAttribute('class', 'buttons');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn');
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', deletePost);

    const archiveButton = document.createElement('button');
    archiveButton.textContent = 'Archive';
    archiveButton.classList.add('btn');
    archiveButton.classList.add('archive');
    archiveButton.addEventListener('click', archivePost);

    div.appendChild(deleteButton);
    div.appendChild(archiveButton);

    function deletePost(e) {
      e.target.parentNode.parentNode.remove();
    }

    function archivePost(e) {
      const movedLi = document.createElement('li');
      movedLi.textContent = e.target.parentNode.parentNode.children[0].textContent;
      archiveSection.appendChild(movedLi);
      e.target.parentNode.parentNode.remove();

      let sorted = [];
      for (let child of Array.from(archiveSection.children)) {
         sorted.push(child);
         child.remove();
      }
      sorted.sort((a,b) => a.textContent.localeCompare(b.textContent));
      sorted.forEach(ch => {
         archiveSection.appendChild(ch);
      });
    }


    article.appendChild(h1);
    article.appendChild(pCategory);
    article.appendChild(pAuthor);
    article.appendChild(pContent);
    article.appendChild(div);

    output.appendChild(article);

    [author, title, category, content].forEach(i => {
       i.value = '';
    });
  }
}
