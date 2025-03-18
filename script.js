let currentTheme = localStorage.getItem('theme') || 'light';

    // Set the initial theme based on localStorage
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }

    // Function to toggle the theme
    function toggleTheme() {
      // Toggle the theme class on the body element
      document.body.classList.toggle('dark-theme');
      
      // Check if dark theme is active and save the theme to localStorage
      if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }

// Get the menu icon and nav links elements
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the 'active' class on the nav-links when the menu icon is clicked
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

    const form = document.getElementById("signup-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    var gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let valid = true;

        // Name validation
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameError.style.visibility = "visible";
            valid = false;
        } else {
            nameError.style.visibility = "hidden";
        }
      if (gmailRegex.test(emailInput.value)) {
          // Valid Gmail address
          emailError.style.visibility = "hidden";  // Hide error message

        } else {
          // Invalid Gmail address
            emailError.textContent = "Please enter a valid email.";
            emailError.style.visibility = "visible";
            valid = false; // Show error message
        }
       

        if (valid) {
            form.submit();
        }
    });