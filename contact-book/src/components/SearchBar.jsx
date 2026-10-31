/* The following function receives the current search term of the user 
and its state updater from App.jsx */ 
function SearchBar({ searchTerm, onSearchChange }) {
    return (
        /* The following line groups the search label and input */
        <div className="search-bar">
            <label htmlFor="contact-search">Search Contacts</label>

            <input
                id="contact-search"
                type="text"
                value={searchTerm}
                /* The following line update the search term whenever
                the user enters or removes text in the search field.
                I referenced our class textbook for this command. */
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search by name or email..."
            />
        </div>
    );
}

export default SearchBar;
