document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.tree-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Find the next sibling element, which should be the nested list
            const nestedList = this.nextElementSibling;

            if (nestedList) {
                // Toggle the 'active' class on the nested list to show/hide it
                nestedList.classList.toggle('active');

                // Also toggle the 'active' class on the toggle span itself to change the icon
                this.classList.toggle('active');
            }
        });
    });
});