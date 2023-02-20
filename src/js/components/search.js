document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search');

  if (!searchForm) return null;

  const searchBtn = searchForm.querySelector('.search__btn');
  const searchInput = searchForm.querySelector('.search__input');

  const toggleButtonState = () => {
    const isActive = searchForm.classList.contains('search--active');

    searchForm.classList.toggle('search--active');
    searchBtn.type = isActive ? 'submit' : 'button';
    searchInput.focus();
  };

  searchBtn.addEventListener('click', toggleButtonState);

  document.addEventListener('click', (e) => {
    const isActive = searchForm.classList.contains('search--active');

    if (isActive && e.target.parentElement !== searchForm) {
      searchForm.classList.remove('search--active');
      searchBtn.type = 'button';
    }
  });
});
