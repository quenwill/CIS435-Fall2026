# Simple Contact Book
This is a Simple Contact Book that allows built with React and Vite that allows users to add, list, search, and delete contacts that they entered via the inputting their full name, email address, and phone number if they would like.

## Features
- **Add Contacts:** Enter a contact's full name and email address, with the option to include a phone number as well.
- **View Contacts:** Saved contacts are displayed.
- **Search Contacts:** Users can search the desired person by name or email address.
- **Case-Insensitive Search:** Desired contacts can be found regardless of capitalization.
- **Delete Contacts:** Users can remove contacts from the list.
- **Form Validation:** The application requires a name and valid email address before accepting the provided submission for a new contact.
- **Conditional Rendering:** The application displays the required messages when the contact list is empty or entered search results do not match.
- **Responsive Design:** The layout of the application adapts for desktop, tablet, and mobile screens.

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- Vite

## Getting Started

### Installation

1. Clone or download this repository.
2. Open a terminal in the `contact-book` project directory.
3. Install the project dependencies in bash:
   npm install
4. Start the development server in bash:
   npm run dev
5. Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

## Project Structure
contact-book/
├── public/
|__ Screenshots
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── ContactItem.jsx
│   │   ├── ContactList.jsx
│   │   └── SearchBar.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md

## Screenshots

### Desktop View

![Contact Book Desktop View](screenshots/desktop.png)

### Tablet View

![Contact Book Tablet View](screenshots/tablet.png)

### Mobile View

![Contact Book Mobile View](screenshots/mobile1.png)

![Contact Book Mobile View](screenshots/mobile2.png)



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
