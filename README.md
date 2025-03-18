# Landing Page Project

This project is a responsive landing page for a product, with a focus on accessibility and SEO. It includes a dynamic light/dark mode toggle, client-side form validation, and a mobile-first design.

### Key Features:
- **Semantic HTML**: Proper usage of tags like `<header>`, `<main>`, `<section>`, and `<footer>` for better accessibility and SEO.
- **Accessibility**: Includes ARIA roles and labels, with real-time validation error messages.
- **Responsive Design**: Uses CSS Flexbox for a mobile-first approach, with media queries for tablet and desktop views.
- **Dynamic Theme Toggle**: Users can switch between light and dark mode, with their preference saved in `localStorage`.
- **Form Validation**: Provides immediate feedback if the form fields are empty or invalid.

### SEO Choices:
- The `<meta>` tags for description and viewport ensure that the page is optimized for search engines and mobile responsiveness.
- Proper use of heading tags (`<h1>`, `<h2>`, etc.) to improve the structure for both accessibility and SEO.

### Accessibility Considerations:
- Forms have associated labels for screen readers.
- Error messages are announced using `aria-live` attributes, and form fields are properly labeled with `aria-required`.

### Instructions:
1. Clone the repository.
2. Open `index.html` in your browser to view the landing page.
3. Toggle between light and dark mode and fill out the form to test validation.
