function toggleDropdown() {
    var content = document.querySelector();
    
    // Check if the dropdown is currently visible
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        //show dropdown
        dropdownContent.style.display = 'block';
    } else {
        // hide dropdown
        dropdownContent.style.display = 'none';  
    }
}