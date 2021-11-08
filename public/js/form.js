const site = document.getElementById('site');
const category = document.getElementById('category');
const search = document.getElementById('search');
const submit = document.getElementById('submit');

search.addEventListener('keyup', (evt) => {
  if (evt.key === 'Enter' && !site.value) {
    evt.preventDefault();
  }

  if (!search.value && !category.value) {
    evt.preventDefault();
  }

  return null;
});

submit.addEventListener('click', (evt) => {
  if (!site.value) {
    evt.preventDefault();
  }

  if (!search.value && !category.value) {
    evt.preventDefault();
  }

  return null;
});
