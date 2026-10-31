import { useState } from 'react';
import './App.css';
/* The following section imports the necessary component files to
run this application as intended */ 
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';


function App() {
  /* The following will store the contacts users enter and allow React 
  to update the application when this data changes. */
  const [contacts, setContacts] = useState([]);
  // The following stores text entered into the search field
  const [searchTerm, setSearchTerm] = useState('');

  // The following sections allows users to add new contacts
  function addContact(newContact){
    const contactWithId = {
      ...newContact,
      /* To fulfill the requirement that contacts should have unique 
      IDs, I utilized the following command after reading the following:
      https://www.geeksforgeeks.org/node-js/node-js-crypto-randomuuid-function/ */
      id: crypto.randomUUID()
    };
    /* The following creates an array that holds the existing and new 
    contacts. */
    setContacts([...contacts, contactWithId]);
  }

  /* The following section allows users to remove a contact, which
  ultimately eliminates its unique ID. */
  function deleteContact(contactId) {
    /* The filter() usage creates a new array that only includes 
    the contacts that do not match the contact being deleted. */
    setContacts(
        contacts.filter((contact) => contact.id !== contactId)
    );
}

/* The following section allows users to search for contacts by filtering
through the saved contacts based on the user's input. */
const filteredContacts = contacts.filter((contact) => {
  /* The following line converts what the user enters into lowercase to
  allow for case-insensitive searching. */
    const search = searchTerm.toLowerCase();

    /* The following section specifically checks if the provided
    search term appears in the contact's name or email stored in the
    application. */
    return (
        contact.name.toLowerCase().includes(search) ||
        contact.email.toLowerCase().includes(search)
    );
});

  return (
    <div className="app-container">
      {/* Application Header for the application*/}
      <header className="app-header">
        <div className="header-content">
          <div className="brand">
            <h1>Simple Contact Book</h1>
          </div>
          <p>Manage your contacts by adding, listing, searching, and deleting your contacts. </p>
        </div>
      </header>
    {/* Main Application Content initializing the break between header
    and the form that users complete.*/}
    <main className="main-content">

      {/* Contact Form Section that is called when users submit a new contact.*/}
      <section className="contact-form-section">
        <div className="section-heading">
          <h2>Add New Contact</h2>
          <p>
            Input your new contact's information below to save their information.
          </p>
        </div>

        <ContactForm onAddContact={addContact} />
      </section>

     { /* Contact List Section displaying contacts and allowing
     them to be searched for or deleted.*/}
      <section className="contact-list-section">
    <div className="section-heading">
        <h2>Your Contacts</h2>
        <p>View and manage your saved contacts.</p>
    </div>

      {/* The following section passes the users
       search term and its state updater to the SearchBar component. */}
    <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
    />

      {/* The following passes filtered contacts, the delete handler,
      and distinguishes between contacts that are present in the contact list
      and are not. */}
    <ContactList
    contacts={filteredContacts}
    onDeleteContact={deleteContact}
    hasContacts={contacts.length > 0}
    searchTerm={searchTerm}
/>

</section>

    </main>

   { /* Application Footer simply displays the footer of this application.*/}
    <footer className="app-footer">
      <p>Contact Book</p>
    </footer>

    </div>
  );
}

export default App;