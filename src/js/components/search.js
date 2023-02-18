document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search');

  if (!searchForm) return null;

  const searchBtn = document.querySelector('.search__btn');

  searchBtn.addEventListener('click', () => {
    const isActive = searchForm.classList.contains('search--active');

    searchForm.classList.toggle('search--active');
    searchBtn.type = isActive ? 'submit' : 'button';
  });

  document.addEventListener('click', (e) => {
    const isActive = searchForm.classList.contains('search--active');

    if (isActive && e.target.parentElement !== searchForm) {
      searchForm.classList.remove('search--active');
      searchBtn.type = 'button';
    }
  });
});
