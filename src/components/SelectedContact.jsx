import React, { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      async function fetchContactDetails() {
        try {
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const contactData = await response.json();
          setContact(contactData); // Store the fetched contact data in state
          console.log(contactData); // Log the data for debugging
        } catch (error) {
          console.error("Error fetching contact details:", error);
        }
      }

      fetchContactDetails();
    }
  }, [selectedContactId]);

  return (
    contact && (
      <div>
        <h2>{contact.name}</h2>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <button onClick={() => setSelectedContactId(null)}>Back to List</button>
      </div>
    )
  );
}
