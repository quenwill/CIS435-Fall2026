import { useState } from 'react';

function ContactForm({ onAddContact }) {
    /* The following section stores the information users enter into the 
    text fields so React can track users' input. */ 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // The following section handles when users submit forms.
    function handleSubmit(event) {
        /* The following line prevents the page from refreshing when
        users submit their form(s) as requested. */
        event.preventDefault();

        /* The following section ensures the name and email fields are not 
        empty upon submission. */
        if (!name.trim() || !email.trim()) {
            return;
        }

        /* The following section sends the new contact to the App 
        component where the parent component will add the content
         to the saved contact list.*/ 
        onAddContact({
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim()
        });

        // The following section clears the form after submission as requested.
        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            {/* The following section requests the required user input.*/}
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter full name"
                    required
                />
            </div>

            {/* The following section requests the required user input.*/}
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter email address"
                    required
                />
            </div>

            {/* The following section requests the optional user input.*/}
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Enter phone number"
                />
            </div>

            {/* The following section ensures the form submits upon request.*/}
            <button type="submit" className="add-contact-button">
                Add Contact
            </button>
        </form>
    );
}

export default ContactForm;
