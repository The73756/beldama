const isHovered = (el) => {
  const rect = el.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const element = document.elementFromPoint(x, y);
  return element === el;
};

const closeDropdown = (dropdown) => {
  dropdown.classList.remove('dropdown-active');
  dropdown.removeAttribute('data-clicked');
};

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const dropdownBtn = e.target.closest('[data-dropdown-button]');
    const isDropdown = e.target.closest('[data-dropdown]');
    const activeDropdowns = document.querySelectorAll('[data-dropdown].dropdown-active');
    let currentDropdown;

    if (dropdownBtn) {
      currentDropdown = e.target.closest(`[data-dropdown]`);
      const isClicked = currentDropdown.getAttribute('data-clicked');

      if (isHovered(dropdownBtn) && isClicked) {
        currentDropdown.removeAttribute('data-clicked');
        currentDropdown.classList.remove('dropdown-active');
        return;
      }

      if (isHovered(dropdownBtn)) {
        currentDropdown.setAttribute('data-clicked', 'true');
        currentDropdown.classList.add('dropdown-active');

        activeDropdowns.forEach((dropdown) => {
          if (dropdown === currentDropdown) return;
          closeDropdown(dropdown);
        });
        return;
      }

      currentDropdown.classList.toggle('dropdown-active');
    }

    activeDropdowns.forEach((dropdown) => {
      if (dropdown === currentDropdown || isDropdown) return;
      closeDropdown(dropdown);
    });
  });

  document.addEventListener('mouseover', (e) => {
    const dropdownBtn = e.target.closest('[data-dropdown-button]');
    const isDropdown = e.target.closest('[data-dropdown]');

    let currentDropdown;

    if (dropdownBtn) {
      currentDropdown = e.target.closest(`[data-dropdown]`);
      currentDropdown.classList.add('dropdown-active');
    }

    document.querySelectorAll('[data-dropdown].dropdown-active').forEach((dropdown) => {
      const isClicked = dropdown.getAttribute('data-clicked');
      if (dropdown === currentDropdown || isDropdown || isClicked) return;
      dropdown.classList.remove('dropdown-active');
    });
  });
});
