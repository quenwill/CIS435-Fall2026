
/* The following function receives contact information and the delete
   function from ContactList.jsx. */
function ContactItem({ contact, onDeleteContact }) {
    return (
        <div className="contact-item">

            {/* Display the contact's name and email address. */}
            <div className="contact-details">
                <h3>{contact.name}</h3>
                <p>{contact.email}</p>

                {/* Display the phone number only if the user provided one.
                    This demonstrates conditional rendering in React. */}
                {contact.phone && (
                    <p>{contact.phone}</p>
                )}
            </div>

            {/* Call the parent's delete function when the button is selected.
                The contact's unique ID identifies which contact to remove. */}
            <button
                type="button"
                className="delete-contact-button"
                onClick={() => onDeleteContact(contact.id)}
                aria-label={`Delete ${contact.name}`}
            >
                Delete
            </button>

        </div>
    );
}

export default ContactItem;

