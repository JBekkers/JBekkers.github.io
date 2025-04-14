function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const content = dropdown.querySelector('.dropdown-content');

  // Toggle the open class to change button background and triangle
  if (content.style.display === 'block') {
    content.style.display = 'none';
    dropdown.classList.remove('open'); // Remove 'open' class when closing
  } else {
    content.style.display = 'block';
    dropdown.classList.add('open'); // Add 'open' class when opening
  }
}

// Close dropdown if clicked outside of it
window.addEventListener('click', function(e) {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const content = dropdown.querySelector('.dropdown-content');

    if (!dropdown.contains(e.target)) {
      content.style.display = 'none';
      dropdown.classList.remove('open'); // Remove 'open' class when clicking outside
    }
  });
});