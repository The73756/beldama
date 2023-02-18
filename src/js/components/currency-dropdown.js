let isClicked = false;
const handleClick = (e) => {
  const isDropdownButton = e.target.matches('.currency-dropdown__btn');
  let currentDropdown;

  if (isDropdownButton) {
    currentDropdown = e.target.closest('.currency-dropdown');

    if (isClicked) {
      currentDropdown.classList.remove('currency-dropdown--active');
      isClicked = false;
      return;
    }

    currentDropdown.classList.add('currency-dropdown--active');
    isClicked = true;
  }

  document.querySelectorAll('.currency-dropdown.currency-dropdown--active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('currency-dropdown--active');
    isClicked = false;
  });
};

const handleHover = (e) => {
  const isDropdownButton = e.target.matches('.currency-dropdown__btn');
  if (!isDropdownButton && e.target.closest('.currency-dropdown')) return;

  let currentDropdown;

  if (isDropdownButton) {
    currentDropdown = e.target.closest('.currency-dropdown');
    currentDropdown.classList.add('currency-dropdown--active');
  }

  document.querySelectorAll('.currency-dropdown.currency-dropdown--active').forEach((dropdown) => {
    if (dropdown === currentDropdown || isClicked) return;
    dropdown.classList.remove('currency-dropdown--active');
    isClicked = false;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', handleClick);
  document.addEventListener('mouseover', handleHover);
});
