import ContactItem from './ContactItem';

/* The following function filters the following from App.jsx: 
saved contacts, deleted contacts, confirmed contacts, and user search terms. */
function ContactList({ contacts, onDeleteContact, hasContacts, searchTerm }) {
    /* The following section implements conditional rendering,
     requiring the following messages to be shown when no contacts 
     have been saved. */ 
    if (!hasContacts) {
        return (
            <div className="empty-state">
                <h3>No contacts yet.</h3>
                <p>Add one above!</p>
            </div>
        );
    }

    /* The following section assesses whether any saved contacts 
    match the search term the user is entering. */
    if (contacts.length === 0) {
        return (
            <div className="empty-state">
                <h3>No matches found for '{searchTerm}'</h3>
                <p>Try searching with a different name or email address.</p>
            </div>
        );
    }

    /* The following section utilizes the map() method to create 
    a ContactItem component for each contact the user imputs. 
    I referenced the following source for my implementation:
    https://www.w3schools.com/jsref/jsref_map.asp*/
    return (
        <div className="contact-list">
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </div>
    );
}

export default ContactList;
