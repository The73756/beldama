let isClicked = false;
const handleClick = (e) => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  let currentDropdown;

  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');

    if (isClicked) {
      currentDropdown.classList.remove('currency-dropdown--active');
      isClicked = false;
      return;
    }

    currentDropdown.classList.add('currency-dropdown--active');
    isClicked = true;
  }

  document.querySelectorAll('[data-dropdown].currency-dropdown--active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('currency-dropdown--active');
    isClicked = false;
  });
};

const handleHover = (e) => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  if (!isDropdownButton && e.target.closest('[data-dropdown]')) return;

  let currentDropdown;

  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.add('currency-dropdown--active');
  }

  document.querySelectorAll('[data-dropdown].currency-dropdown--active').forEach((dropdown) => {
    if (dropdown === currentDropdown || isClicked) return;
    dropdown.classList.remove('currency-dropdown--active');
    isClicked = false;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', handleClick);
  document.addEventListener('mouseover', handleHover);
});
